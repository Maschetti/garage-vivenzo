import '@/styles/global.css'
import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <View className='bg-slate-50 flex-1 items-center justify-center'>
      <Slot />
    </View>
  )
}