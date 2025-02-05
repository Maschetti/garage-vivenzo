import { Car, Cars } from "@/constants/Cars";
import { ParkedCars } from "@/constants/ParkedCars";
import { Link } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

function CarListItem(item: Car) {
  const CarState = item.state === "with client"
  ? "Cliente"
  : item.state === "parked"
  ? "Estacionado"
  : "Recepção";
  
  const ParkInfo = CarState === "Estacionado" 
  ? ParkedCars.find(car => car.number === item.number)
  : undefined

  const floor = ParkInfo?.floor
  const spot = ParkInfo?.spot
  const id = ParkInfo?.identifier
  
  return (
    <Link
      href={{
        pathname: "/car/[number]",
        params: { number: item.number },
      }}
    >
      
      <View className="p-2 border-b border-gray-300 flex-row w-full h-24">
        {/* Column 1 - Status */}
        <View className="w-24 items-start justify-center">
          <Text className="font-bold">
            {CarState}
          </Text>
          {CarState === 'Estacionado' && (
            <View>
              <Text className="font-bold">
                {floor} - {spot}
              </Text>
              <Text>
                Prisma: {id}
              </Text>
            </View>
          )}
        </View>

        {/* Column 2 - Car Information */}
        <View className="flex-1 items-center justify-center">
          <View className="w-64">
          <Text className="font-bold">{item.number} | {item.owner}</Text>
            <Text className="text-lg">{item.model} | {item.color}</Text>
          </View>
        </View>

      </View>
    </Link>
  )
}

export default function CarList() {
  const [search, setSearch] = useState("");

  const filteredCars = Cars.filter(
    (car) =>
      car.model.toLowerCase().includes(search.toLowerCase()) ||
      car.owner.toLowerCase().includes(search.toLowerCase()) ||
      car.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1">
      <TextInput
        className="p-4 m-4 border border-gray-900 rounded-md mb-4"
        placeholder="Procure por placa, cliente ou modelo..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View className="pb-2 border-b border-gray-400 flex-row justify-between">
            <Text className="text-lg font-bold w-24 text-center">Status</Text>
            <Text className="text-lg font-bold flex-1 text-center">Dados do Veículo</Text>
          </View>
        }
        renderItem={({ item }) => (
          <CarListItem 
            owner={item.owner}
            id={item.id}
            color={item.color}
            model={item.model}
            number={item.number}
            state={item.state}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
