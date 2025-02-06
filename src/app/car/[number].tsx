import ParkModal from '@/components/ParkModal';
import { Cars, CarState } from '@/constants/Cars';
import { ParkedCars } from '@/constants/ParkedCars';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, ReceiptText } from 'lucide-react-native';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

type StateContainerProps = {
  state: CarState,
  changeState: (state: CarState) => void
  openModal: () => void
  floor?: string
  spot?: string
}

function StateContainer({state, changeState, floor, spot, openModal}: StateContainerProps) {
  const title = state === 'parked' ? 'Estacionado'
  : state === 'at the hall' ? 'Recepção'
  : 'Com o cliente'
  return (
    <View className='p-2'>
      <Text className='text-xl font-bold uppercase text-red-600 self-center'>{title}</Text>
      <View>
        {state === 'parked' && (
          <View>
            <Button title="Recepção" onPress={() => changeState('at the hall')} />
            <Text>Andar: {floor}</Text>
            <Text>Vaga: {spot}</Text>
          </View>
        )}
        {state === 'with client' && (
          <Button title="Recepção" onPress={() => changeState('at the hall')} />
        )}
        {state === 'at the hall' && (
          <View className='flex flex-row gap-2 flex-wrap justify-center'>
            <Button title="Estacionar" onPress={openModal} />
            <Button title="Check Out" onPress={() => changeState('with client')} />
            <Button title="Entregue ao cliente" onPress={() => changeState('with client')} />
          </View>
        )}
      </View>

    </View>
  )
}

export default function CarPage() {
  const { number } = useLocalSearchParams();

  const car = Cars.find(car => car.number === number);

  const [localState, setLocalState] = useState(car?.state);

  const carP = localState === 'parked' ? ParkedCars.find(car => car.number === number) : undefined

  const [floor, setFloor] = useState(carP ? carP.floor : undefined);
  const [spot, setSpot] = useState(carP ? carP.spot : undefined);

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  function onClose() {
    setIsModalVisible(false);
  }

  function onConfirm(floor: string, spot: string) {
    setFloor(floor);
    setSpot(spot);
    setLocalState('parked');
    setIsModalVisible(false);
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
          className="flex flex-row items-center gap-4 p-2 border-b border-slate-300"
          onPress={() => router.push('/')}
        >
          <ArrowLeft color="black" size={30}/>
          <Text className='text-black text-2xl'>Voltar</Text>
        </TouchableOpacity>
        {/* <Button title="History Track" onPress={() => router.push(`/car/${number}/history`)} />
        <Button title="Ticket" onPress={() => router.push(`/car/${number}/ticket`)} /> */}
        
      </View>

      <View className='flex flex-row p-2'>
        <TouchableOpacity
          className="flex-1 items-center justify-center bg-green-500 rounded-md"
          onPress={() => router.push('/')}
        >
          <Text className='text-black text-2xl'>Histórico</Text>
        </TouchableOpacity>

        <ReceiptText color="black" size={30} />
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
        <StateContainer
          openModal={() => setIsModalVisible(true)}
          state={localState as CarState}
          changeState={setLocalState}
          floor={floor}
          spot={spot}/>
      </View>

      <ParkModal isModalVisible={isModalVisible} onClose={onClose} onConfirm={onConfirm} />
    </View>
  );
}