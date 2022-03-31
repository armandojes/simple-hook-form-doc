export const basicUsageHtml: string = `
  const Component = (props) => {
    return (
      <form>
        <input type="text" name="name" />
        <input type="text" name="lastname" />
        <input type="text" name="email" />
      </form>
    )
  };
`;

export const basicUsageReactWithSHF: string = `
  import { useForm } from 'simple-hook-form'

  const Component = (props) => {
    const { values, registerInput } = useForm();

    // los valores estan disponibles en la variable \`values\`
    console.debug('nombre', values.name);
    console.debug('apellido', values.lastname);
    console.debug('correo', values.email);

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
        <input type="text" {...registerInput('email')} />
      </form>
    )
  };
`;

export const registerInputExamples: string = `
  // uso correcto
  <input type="text" {...registerInput('name')} />
  <input type="text" {...registerInput('lastname')} />
  <input type="text" {...registerInput('email')} />

  // error identificador duplicado
  <input type="text" {...registerInput('name')} />
  <input type="text" {...registerInput('name')} />

  // error identificador faltante
  <input type="text" {...registerInput()} />
  <input type="text" {...registerInput()} />
`;

export const chackboxExample = `
  const Component = (props) => {
    const { registerCheckbox, values } = useForm();

    // los valores para los checkbox seran transformados a booleanos
    // si esta marcado el valor sera true, si no esta macrado el valor sera false 

    console.log(values.checkbox1); // mostrara true o false
    console.log(values.checkbox2); // mostrara true o false
    
    return (
      <input type="checkbox" {...registerChecbox('checkbox1')} />
      <input type="checkbox" {...registerChecbox('checkbox2')} />
    );
  };
  
`;

export const radioExample: string = `
  const Component = () => {
    const { registerRadio, values } = useForm();

    // mostrara \`female\` o \`male\`
    console.log(values.gender) 

    return (
      // En html simple haríamos algo asi
      <input type="radio" name="gender" value="female" />
      <input type="radio" name="gender" value="male" />

      // con registerRadio
      <input type="radio" {...registerRadio('gender', 'female')} />
      <input type="radio" {...registerRadio('gender', 'male')} />
    )
  };

`;

export const completeBasicExample: string = `
  import { useForm } from 'simple-hook-form';
  import axios from 'axios';

  const Component = (props) => {
    const { registerInput, registerCheckbox, registerRadio, values } = useForm();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios({
        method: 'post',
        url: 'some_api_url_here',
        data: values,
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
        <input type="text" {...registerInput('emal')} />
        <input type="radio" {...registerRadio('gender', 'male')} />
        <input type="radio" {...registerRadio('gender', 'female')} />
        <input type="checkbox" {...registerCheckbox('agreeTermsAndConditions')} />

        <select {...registerInput('country')}>
          <option value="mexico">Mexico</option>
          <option value="germany">Germany</option>
          <option value="china">China</option>
        </select>

      </form>
    );
  };
`;
