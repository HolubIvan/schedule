import React from "react";
import { Select } from "antd";
const { Option } = Select;

function getTasks(TASKS_TYPES) {
  return TASKS_TYPES.map((el) => {
    return (
      <Option value={el} key={el}>
        {el}
      </Option>
    );
  });
}

function getTimeZones(TIME_ZONES) {
  return TIME_ZONES.map((el) => {
    return (
      <Option value={el.value} key={el.name}>
        {el.name} ({el.value})
      </Option>
    );
  });
}

const getRightData = (state) => {
  return {
    description: state.description,
    place: state.place,
    dateTime: state.dateTime,
    organizer: state.organizer,
    comment: state.comment,
    descriptionUrl: state.descriptionUrl,
    type: state.type,
    deadlineDateTime:
      state.deadlineDateTime !== "2020-12-31 10:10"
        ? state.deadlineDateTime
        : "",
    timeZone: state.timeZone,
    name: state.name,
    id: state.id,
    feedback: state.feedback,
  };
};

const getRightTime = (permanentEvent) => {
  const dateObj = {};
  const dateTime = permanentEvent.currentTime;
  const currentDate = permanentEvent.currentDate.split(".").reverse().join("-");
  dateObj.dateTime = `${currentDate} ${dateTime}`;

  if (permanentEvent.currentDeadlineTime) {
    const deadlineTime = permanentEvent.currentDeadlineTime;
    const deadlineDate = permanentEvent.currentDeadlineDate
      .split(".")
      .reverse()
      .join("-");
    dateObj.deadlineDateTime = `${deadlineDate} ${deadlineTime}`;
  }

  return dateObj;
};

export { getTasks, getTimeZones, getRightData, getRightTime };
