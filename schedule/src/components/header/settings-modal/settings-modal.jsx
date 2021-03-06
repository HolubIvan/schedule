import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Drawer, Button, Space } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import TaskColorCustomizer from '../task-color-customizer/task-color-customizer';
import './settings-modal.css';

export default function SettingsModal() {
  const [visible, setVisible] = useState(false);
  
  const isImpairedVersion = useSelector(
    (state) => state.optionsReducer.impairedVersion
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

	return (
		<>
			<Space style={{ float: 'right' }} >
				<Button
					onClick={showDrawer}
					className="settings-btn"
				>
					<SettingFilled />
				</Button>
			</Space>
			<Drawer
				title="Settings"
				placement="right"
				closable={true}
				onClose={onClose}
				visible={visible}
        bodyStyle={{ padding: "0 25px"}}
        className={ isImpairedVersion ? 'impairedVersion' : '' }
				headerStyle={{ textTransform: "uppercase" }}
			>
			<TaskColorCustomizer isImpairedVersion={isImpairedVersion}/>
			</Drawer>
		</>
	);
}
