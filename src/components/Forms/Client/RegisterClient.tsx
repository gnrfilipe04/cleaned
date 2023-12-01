import { ClientDTO, ClientSchema } from "@/dtos/client";
import { Button, FormControl, Heading, SimpleGrid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from '../../Input'
import { useRegisterClient } from "./useRegisterClient";
import { Select } from "@/components/Select";

export function RegisterClient (){

    const hook = useRegisterClient()

    return (
        <FormControl>
            <SimpleGrid spacing={["2","4"]} w="100%">

                <Heading>Registrar cliente</Heading>
                <Input 
                    type="text" 
                    label="Nome" 
                    {...hook.form.register('username')}
                    name="username" 
                    error={hook.form.formState.errors.username}
                />

                <Input 
                    type="email" 
                    label="Email" 
                    {...hook.form.register('email')}
                    name="email" 
                    error={hook.form.formState.errors.email} 
                />

                <Input 
                    type="tel" 
                    label="Telefone" 
                    {...hook.form.register('phone')}
                    name="phone" 
                    error={hook.form.formState.errors.phone} 
                />

                <Input 
                    type="file" 
                    hidden={false}
                    accept="image/*"
                    label="Foto" 
                    {...hook.form.register('photo')}
                    name="photo" 
                    error={hook.form.formState.errors.photo} 
                />

                <Select
                    {...hook.form.register('adress.country')}
                    name="adress.country"
                    onChange={(e) => {
                        hook.setStatesByCountry(e.target.value)
                        hook.setCountry(e.target.value)
                    }}
                    placeholder='País'>

                    {hook.countries?.map((country, index) => (
                        <option key={index} value={country.country}>{country.country}</option>
                    ))}

                </Select>

                <Select
                    {...hook.form.register('adress.state')}
                    name="adress.state"
                    isDisabled={!hook.states.length}
                    onChange={(e) => hook.setCitiesByState(hook.country, e.target.value)}
                    placeholder='Escolha o estado'>
                    {hook.states?.map((state) => (
                        <option key={state.state_code} value={state.name}>{state.name}</option>
                    ))}
                </Select>

                <Select
                    {...hook.form.register('adress.city')}
                    name="adress.city"
                    isDisabled={!hook.cities.length}
                    placeholder='Escolha a cidade'>
                    {hook.cities?.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </Select>
                
                <Input 
                    type="number" 
                    label="Número" 
                    {...hook.form.register('adress.number')}
                    name="adress.number" 
                    error={hook.form.formState.errors.adress?.number} 
                />

                <Heading size={'md'}>Propriedades</Heading>
                
                <Button
                    onClick={hook.form.handleSubmit(hook.submit)}
                    mt={4}
                    colorScheme='teal'
                    isLoading={hook.form.formState.isSubmitting}
                >
                Enviar
            </Button>
          </SimpleGrid>
        </FormControl>
    )
}



