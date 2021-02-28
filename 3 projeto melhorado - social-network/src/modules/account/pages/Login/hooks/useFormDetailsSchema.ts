import { useMemo } from 'react';
import * as yup from 'yup';

const useFormDetailsSchema: () => any = () => {
  const schema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email('O email precisa ser valido')
        .required('Campo Obrigatório'),
      password: yup
        .string()
        .min(3, 'A senha deve conter ao menos 3 caracteres')
        .required('Campo Obrigatório'),
    });
  }, []);

  return schema;
};

export default useFormDetailsSchema;
