import { ClientDTO, ClientSchema } from "@/dtos/client";
import { Button, FormControl, Heading, SimpleGrid, Input as ChakraInput, Box } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from '../../Input'
import { useRegisterClient } from "./useRegisterClient";
import { Select } from "@/components/Select";

export function RegisterClient (){

    const hook = useRegisterClient()
    hook.form.watch()
    return (
        <FormControl>
            <Heading>Registrar cliente</Heading>
            <SimpleGrid mt={'10px'} columns={2} spacing={4} w="100%">

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
                    label="País"
                    {...hook.form.register('adress.country')}
                    name="adress.country"
                    error={hook.form.formState.errors.adress?.country} 
                    onChange={(e) => {
                        hook.setStatesByCountry(e.target.value)
                        hook.setCountry(e.target.value)
                    }}
                    placeholder='Selecionar'>

                    {hook.countries?.map((country, index) => (
                        <option key={index} value={country.country}>{country.country}</option>
                    ))}

                </Select>

                <Select
                    label="Estado"
                    {...hook.form.register('adress.state')}
                    name="adress.state"
                    error={hook.form.formState.errors.adress?.state}
                    isDisabled={!hook.states.length}
                    onChange={(e) => hook.setCitiesByState(hook.country, e.target.value)}
                    placeholder='Selecionar'>
                    {hook.states?.map((state) => (
                        <option key={state.state_code} value={state.name}>{state.name}</option>
                    ))}
                </Select>

                <Select
                    label="Cidade"
                    {...hook.form.register('adress.city')}
                    name="adress.city"
                    error={hook.form.formState.errors.adress?.city}
                    isDisabled={!hook.cities.length}
                    placeholder='Selecionar'>
                    {hook.cities?.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </Select>

                <Input 
                    label="Endereço" 
                    {...hook.form.register('adress.street')}
                    name="adress.street" 
                    error={hook.form.formState.errors.adress?.street} 
                />
                
                <Input 
                    type="number" 
                    label="Número" 
                    {...hook.form.register('adress.number')}
                    name="adress.number" 
                    error={hook.form.formState.errors.adress?.number} 
                />

                <Box />
                
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



