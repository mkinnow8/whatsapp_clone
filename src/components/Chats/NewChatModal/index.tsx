import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonModalComponent, NewModalItem} from '../../Common';

type Props = {
  onClose: () => void;
};

const NewChatModal = ({onClose}: Props) => {
  return (
    <CommonModalComponent heading="New Chat" onClose={onClose}>
      <NewModalItem />
    </CommonModalComponent>
  );
};

export {NewChatModal};
