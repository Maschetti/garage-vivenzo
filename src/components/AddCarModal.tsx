import { Cars } from "@/constants/Cars";
import { router } from "expo-router";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

type AddCarModalProps = {
  isModalVisible: boolean;
  closeModal: () => void;
};

export default function AddCarModal({ isModalVisible, closeModal }: AddCarModalProps) {
  const [owner, setOwner] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const handleAddCar = () => {
    const existingCar = Cars.find(car => car.number === carNumber);
  
    if (existingCar) {
      router.push({
        pathname: "/car/[number]",
        params: { number: carNumber },
      });
    } else {
      console.log({ owner, carNumber, model, color });
      closeModal();
    }
  };

  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/70">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg">
          <Text className="text-xl font-bold self-center mb-2">Cadastrar novo carro</Text>
          
          <View className="flex flex-col gap-2">

            <TextInput
              placeholder="Placa do carro"
              value={carNumber}
              onChangeText={setCarNumber}
              className="border rounded-md border-gray-300"
              keyboardType="visible-password"
            />

            <TextInput
              placeholder="Proprietário"
              value={owner}
              onChangeText={setOwner}
              className="border rounded-md border-gray-300"
            />
            
            <TextInput
              placeholder="Modelo do carro"
              value={model}
              onChangeText={setModel}
              className="border rounded-md border-gray-300"
            />
            <TextInput
              placeholder="Cor do carro"
              value={color}
              onChangeText={setColor}
              className="border rounded-md border-gray-300"
            />
          </View>

          <View className="flex flex-row gap-2">

            <TouchableOpacity
              className="mt-4 bg-red-600 p-3 rounded-lg items-center flex-1"
              onPress={closeModal}
            >
              <Text className="text-white text-lg">Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="mt-4 bg-green-600 p-3 rounded-lg items-center flex-1"
              onPress={handleAddCar}
            >
              <Text className="text-white text-lg">Cadastrar</Text>
            </TouchableOpacity>

          </View>
          
        </View>
      </View>
    </Modal>
  );
}