import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { Home } from '../screens/home'
import { AppointmentDetails } from '../screens/appointmentdetails'
import { AppointmentCreate } from '../screens/appointmentcreate'

import { theme } from "../global/styles/theme"

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
    return (
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100,
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}