import { Cars } from "@/constants/Cars";
import { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";

type UpdateCarModalProps = {
  isModalVisible: boolean
  closeModal: () => void
  number: string
}

export default function UpdateCarModal({
  isModalVisible,
  closeModal,
  number
}: UpdateCarModalProps) {
  const car = Cars.find(car => car.number === number)

  const [localNumber, setLocalNumber] = useState(number);
  const [localOwner, setLocalOwner] = useState(car?.owner)
  const [localColor, setLocalColor] = useState(car?.color)
  const [localModel, setLocalModel] = useState(car?.model)

  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/70">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg flex flex-col gap-2">
          
          <Text>Placa</Text>
          <TextInput
            className="p-4 m-4 border border-gray-900 rounded-md mb-4"
            placeholder={number}
            value={localNumber}
            onChangeText={setLocalNumber}
          />

          <Text>Dono</Text>
          <TextInput
            className="p-4 m-4 border border-gray-900 rounded-md mb-4"
            placeholder={car?.owner}
            value={localOwner}
            onChangeText={setLocalOwner}
          />

          <Text>Modelo</Text>
          <TextInput
            className="p-4 m-4 border border-gray-900 rounded-md mb-4"
            placeholder={car?.model}
            value={localModel}
            onChangeText={setLocalModel}
          />

          <Text>Cor</Text>
          <TextInput
            className="p-4 m-4 border border-gray-900 rounded-md mb-4"
            placeholder={car?.color}
            value={localColor}
            onChangeText={setLocalColor}
          />

          <View className="mt-4 flex-row justify-between">
            <Button title="Cancelar" onPress={closeModal} color="#FF5C5C" />
            <Button title="Confirmar" onPress={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  )
}