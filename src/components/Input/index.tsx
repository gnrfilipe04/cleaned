import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name, 
  label, 
  error = null,
  ...rest
}, ref) => {
    
  return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
              id={name}
              name={name}
              focusBorderColor="teal.500"
              bgColor="white"
              variant="filled"
              _hover={{
                borderColor: "teal.500",
                bgColor: "white"
              }}
              _focus={{
                bgColor: "white"
              }}
              size="lg"
              ref={ref}
              {...rest}
            />

            {!!error && (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
          </FormControl>
    )
}

export const Input = forwardRef(InputBase)