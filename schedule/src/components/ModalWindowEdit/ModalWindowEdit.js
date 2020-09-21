import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Select, Input, Checkbox, DatePicker, Modal } from "antd";
import "antd/dist/antd.css";
import "./ModalWindow.scss";
import {
  MENTOR_MODAL,
  TASKS_TYPES,
  TIME_ZONES,
} from "./../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import moment from "moment";
import {
  getTasks,
  getTimeZones,
  getRightData,
  getRightTime,
} from "./../../utils/editWindowUtils";
import OfflineComponent from "./OfflineComponent";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Edit modal window component

const ModalWindowEdit = ({ getFeedbackState }) => {
  const dispatch = useDispatch();
  const refRangePicker = useRef();
  const permanentEvent = useSelector((state) => {
    return state.permanentEventReducer.permanentEvent;
  });
  const visible = useSelector(
    (state) => state.modalWindowReducer.editModalWindowVisability
  );

  const handleCancel = () => {
    dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  const [deadLineCheckbox, setDeadlineCheckbox] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [address, setAddress] = useState({
    town: "",
    typeOfStreet: "",
    street: "",
    house: "",
  });

  const [stateEditWindow, setStateEditWindow] = useState({
    description: "",
    place: "",
    dateTime: "",
    organizer: "",
    comment: "",
    descriptionUrl: "",
    type: "",
    deadlineDateTime: "",
    timeZone: "",
    name: "",
    id: "",
  });

  useEffect(() => {
    setStateEditWindow({ ...permanentEvent });
    if (permanentEvent) {
      setDeadlineCheckbox(permanentEvent.deadlineDateTime ? true : false);
    }
  }, [permanentEvent]);

  function onEventLocationChange(e) {
    if (e === "online") {
      setIsOnline(true);
      setStateEditWindow({
        ...stateEditWindow,
        place: "",
      });
    } else {
      setIsOnline(false);
    }
  }

  const onEventChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      [e.target.getAttribute("attr")]: e.target.value,
    });
  };

  const onSelectTypeChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      type: e,
    });
  };

  const onTimeZoneChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      timeZone: e,
    });
  };

  const onDateChange = (date, dateString) => {
    setStateEditWindow({
      ...stateEditWindow,
      dateTime: dateString[0],
      deadlineDateTime: dateString[1],
    });
  };

  const onDeadlineCheckboxChange = (e) => {
    if (e.target.checked === true) {
      setStateEditWindow({
        ...stateEditWindow,
        deadlineDateTime: refRangePicker.current.props.defaultValue[1]._i,
      });
    } else {
      setStateEditWindow({
        ...stateEditWindow,
        deadlineDateTime: "",
      });
    }
    setDeadlineCheckbox(!deadLineCheckbox);
  };

  const onOfflineInputTypeEvent = (e) => {
    setAddress({
      ...address,
      [e.target.getAttribute("attr")]: e.target.value,
    });
  };

  const onOfflineSelectTypeEvent = (e) => {
    if (e === "avenue") {
      setAddress({
        ...address,
        typeOfStreet: "проспект",
      });
    } else if (e === "street") {
      setAddress({
        ...address,
        typeOfStreet: "улица",
      });
    } else {
      setAddress({
        ...address,
        typeOfStreet: "переулок",
      });
    }
  };

  const onOfflineSubmit = () => {
    setStateEditWindow({
      ...stateEditWindow,
      place: `${address.town} ${address.typeOfStreet} ${address.street} ${address.house}`,
    });
  };

  const onModalSubmit = () => {
    const rightData = getRightData(stateEditWindow);
    // dispatch(actionCreator.updateEvent([rightData.id, rightData]));
    // dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  if (permanentEvent) {
    const rightTime = getRightTime(permanentEvent);
    return (
      <Modal visible={visible} onCancel={handleCancel} onOk={onModalSubmit}>
        <h2
          className="wrapper-modal-edit__header"
          style={{ fontWeight: "300" }}
        >
          Edit task
        </h2>

        <Row gutter={16} style={{ marginTop: "1rem" }}>
          <Col span={6} style={{ marginLeft: "2rem" }}>
            <Input
              placeholder="Task Name"
              attr="name"
              value={stateEditWindow.name}
              onChange={onEventChange}
            />
          </Col>
          <Col span={6}>
            <Select
              style={{ width: 200 }}
              value={stateEditWindow.type}
              onChange={onSelectTypeChange}
            >
              <OptGroup label="TaskTitle">{getTasks(TASKS_TYPES)}</OptGroup>
            </Select>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <TextArea
            rows={5}
            placeholder="Task Description"
            attr="description"
            value={stateEditWindow.description}
            onChange={onEventChange}
          />
        </Col>

        <Row style={{ marginTop: "1rem" }}>
          <Col span={6} style={{ marginLeft: "2rem" }}>
            <Select
              style={{ width: 200 }}
              value={stateEditWindow.timeZone}
              onChange={onTimeZoneChange}
            >
              <OptGroup label="Timezones">{getTimeZones(TIME_ZONES)}</OptGroup>
            </Select>
          </Col>
          <Col span={12}>
            <RangePicker
              ref={refRangePicker}
              style={{ marginLeft: "2rem" }}
              showTime={{
                hideDisabledOptions: true,
              }}
              format={MENTOR_MODAL.DATE_FORMAT}
              disabled={[false, !deadLineCheckbox]}
              onChange={onDateChange}
              defaultValue={[
                moment(rightTime.dateTime, MENTOR_MODAL.DATE_FORMAT),
                !rightTime.deadlineDateTime
                  ? moment("2020-12-31 10:10", MENTOR_MODAL.DATE_FORMAT)
                  : moment(
                      rightTime.deadlineDateTime,
                      MENTOR_MODAL.DATE_FORMAT
                    ),
              ]}
            />
          </Col>
          <Col span={4}>
            <Checkbox
              onChange={onDeadlineCheckboxChange}
              style={{ marginTop: "5px" }}
              checked={deadLineCheckbox | false}
            >
              Deadline
            </Checkbox>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Input
            placeholder="Additional url"
            attr="descriptionUrl"
            value={stateEditWindow.descriptionUrl}
            onChange={onEventChange}
          />
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Checkbox onChange={getFeedbackState}>Checkbox for feedback</Checkbox>
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Select
            defaultValue="Online/Offline"
            style={{ width: 200 }}
            onChange={onEventLocationChange}
          >
            <OptGroup label="Place">
              <Option value="online">{MENTOR_MODAL.isOnline.online}</Option>
              <Option value="offline">{MENTOR_MODAL.isOnline.offline}</Option>
            </OptGroup>
          </Select>

          {isOnline === true ? (
            ""
          ) : (
            <OfflineComponent
              MENTOR_MODAL={MENTOR_MODAL}
              onOfflineInputTypeEvent={onOfflineInputTypeEvent}
              onOfflineSelectTypeEvent={onOfflineSelectTypeEvent}
              onOfflineSubmit={onOfflineSubmit}
            />
          )}
        </Col>
      </Modal>
    );
  }
  return null;
};

export default ModalWindowEdit;
