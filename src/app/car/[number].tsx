import { Cars } from '@/constants/Cars';
import { ParkedCars } from '@/constants/ParkedCars';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default function CarPage() {
  const { number } = useLocalSearchParams();

  const car = Cars.find(car => car.number === number);

  const [localState, setLocalState] = useState(car?.state);

  const local = localState === 'parked' ? ParkedCars.find(car => car.number === number)?.place : 'Aleatório'

  function Parked() {
    return(
      <View>
        <Text>Local: {local}</Text>
        <Button title="Put in the Hall" onPress={() => setLocalState('at the hall')} />
      </View>
    )
  }

  function WithClient() {
    return <Button title="Put in the Hall" onPress={() => setLocalState('at the hall')} />
  }

  function AtHall() {
    return <View>
      <Button title="Estacionado" onPress={() => setLocalState('parked')} />
      <Button title="Entregue ao cliente" onPress={() => setLocalState('with client')} />
      <Button title="Check Out" onPress={() => setLocalState('with client')} />
    </View>
  }

  if (!car) {
    return (
      <View>
        <Text>Car not found</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <TouchableOpacity
          className="flex flex-row items-center gap-4 p-2"
          onPress={() => router.push('/')}
        >
          <ArrowLeft color="black" size={30}/>
          <Text className='text-black text-2xl'>Voltar</Text>
        </TouchableOpacity>
        {/* <Button title="History Track" onPress={() => router.push(`/car/${number}/history`)} />
        <Button title="Ticket" onPress={() => router.push(`/car/${number}/ticket`)} /> */}
        
      </View>

      <View className='p-2 border-y border-slate-300'>
        <Text className='text-lg font-bold'>Informações básicas:</Text>
        <View className='flex-row'>
          <View className='w-1/2'>
            <Text className='text-lg'>Dono: {car.owner}</Text>
            <Text className='text-lg'>Carro: {car.model}</Text>
          </View>
          <View className='w-1/2'>
            <Text className='text-lg'>Placa: {car.number}</Text>
            <Text className='text-lg'>Cor: {car.color}</Text>
          </View>
        </View>
      </View>
      
      <View className='p-2'>
        {localState === 'parked' && (
          <Parked />
        )}
        {localState === 'with client' && (
          <WithClient />
        )}
        {localState === 'at the hall' && (
          <AtHall />
        )}
      </View>
    </View>
  );
}