import { FormControl, FormErrorMessage, FormLabel, SelectProps as ChakraSelectProps, Select as ChakraSelect } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { DetailedHTMLProps, forwardRef, ForwardRefRenderFunction, OptionHTMLAttributes } from "react";

interface SelectProps extends ChakraSelectProps{
  name: string;
  label?: string;
  error?: FieldError
  children: React.ReactNode
}

const SelectBase: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = ({
  name, 
  label, 
  error = null,
  children,
  ...rest
}, ref) => {
    
  return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraSelect
                id={name} 
                name={name}
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
                placeholder='País'
                ref={ref}
                {...rest}
            >
                {children}
            </ChakraSelect>

            {!!error && (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
          </FormControl>
    )
}

export const Select = forwardRef(SelectBase)