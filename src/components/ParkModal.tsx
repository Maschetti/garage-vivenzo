import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

interface ParkModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  onConfirm: (floor: string, spot:string) => void;
}

export default function ParkModal({ isModalVisible, onClose, onConfirm }: ParkModalProps) {
  const [selectedFloor, setSelectedFloor] = useState("Térreo");
  const [selectedSpot, setSelectedSpot] = useState('0');

  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/70">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg flex flex-col gap-2">
          <Text className="text-lg font-semibold mb-4">Estacione o Carro:</Text>

            <Picker
            selectedValue={selectedFloor}
            onValueChange={(itemValue) => setSelectedFloor(itemValue)}
            style={{
              backgroundColor: '#f0f0f0',
            }}
            >
            <Picker.Item label="Térreo" value="Térreo" />
            <Picker.Item label="2º Andar" value="2" />
            <Picker.Item label="3º Andar" value="3" />
            <Picker.Item label="4º Andar" value="4" />
            </Picker>

          <Picker
            selectedValue={selectedSpot}
            onValueChange={(itemValue) => setSelectedSpot(itemValue)}
            style={{
              backgroundColor: '#f0f0f0',
            }}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>

          <View className="mt-4 flex-row justify-between">
            <Button title="Cancelar" onPress={onClose} color="#FF5C5C" />
            <Button title="Confirmar" onPress={() => onConfirm(selectedFloor, selectedSpot)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
