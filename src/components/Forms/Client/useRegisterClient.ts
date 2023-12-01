import { useEffect, useState } from "react"
import { ClientDTO, ClientSchema } from "@/dtos/client"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { CountryDTO } from "@/dtos/country"
import { StateDTO } from "@/dtos/state"

export function useRegisterClient(){

    const [countries, setCountries] = useState<CountryDTO[]>([])
    const [states, setStates] = useState<StateDTO[]>([])
    const [cities, setCities] = useState<string[]>([])
    const [country, setCountry] = useState<string>('')
    const [state, setState] = useState<string>('')	

    const form = useForm<ClientDTO>({
        defaultValues: { username: '', phone: '', email: '' },
        resolver: zodResolver(ClientSchema.pick({ username: true, phone: true, email: true, adress: true }))
    })

    const submit = (data: ClientDTO) => {
        console.log(data)
    }

    const getCountries = async () => {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries')
        return response.data
    }

    const getStates = async (country: string) => {
        const response = await axios.post(`https://countriesnow.space/api/v0.1/countries/states`, { country })
        return response.data
    }

    const getCities = async (country: string, state: string) => {
        const response = await axios.post(`https://countriesnow.space/api/v0.1/countries/state/cities`, { country, state })
        return response.data
    }

    const setStatesByCountry = async (country: string) => {
        const cities = await getStates(country)
        setStates(cities.data.states)
    }

    const setCitiesByState = async (country: string, state: string) => {
        const cities = await getCities(country, state)
        setCities(cities.data)
    }

    useEffect(() => {
        getCountries()
            .then((countries) => setCountries(countries.data))
            .catch(console.log)
    }, [])

    console.log({ countries, cities, })

    return {
        form,
        submit,
        countries,
        getStates,
        states,
        setStatesByCountry,
        setCitiesByState,
        cities,
        country, 
        setCountry,
        state, 
        setState
    }
}