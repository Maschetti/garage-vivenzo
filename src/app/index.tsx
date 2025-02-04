import AddCarModal from '@/components/AddCarModal';
import CarList from '@/components/CarList';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <SafeAreaView className='flex-1 p-2'>

      <CarList />
      
      <TouchableOpacity
        className="bg-green-600 p-4 rounded-lg items-center"
        onPress={() => setIsModalOpen(true)}
      >
        <Text className="text-white text-lg font-bold">Check-in de Veículo</Text>
      </TouchableOpacity>

      <AddCarModal isModalVisible={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </SafeAreaView>
  )
}