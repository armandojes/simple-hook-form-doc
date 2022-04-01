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

export const initialValuesInput: string = `
  const Component = () => {
    const { registerInput } = useForm({
      initialValues: { name: 'jose', lastname: 'lopez' }
    });

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
      </form>
    );

  }
`;

export const booleanDefaultValue: string = `
  const Compoent = () => {
    const { registerCheckbox } = useForm({
      initialValues: { checkbox1: true, checkbox2: false }
    });
  };

  return (
    <form>
      // marcado por defecto porque el valor inicial es \`true\`
      <input type="checkbox" {..registerCheckbox('checkbox1')} />
    
      // desmarcado por defecto porque el valor inicial es \`false\`
      <input type="checkbox" {..registerCheckbox('checkbox2')} />
    </form>
  );
`;

export const exampleRadio: string = `
  const Component = () => {
    const { registerRadio } = useForm({ initialValues: { gender: 'male' } });

    return (
      <form>
        // marcado por defecto porque el valor inicial es \`male\`
        <input type="radio" {...registerRadio('gender', 'male')} />

        // desmarcado por defecto porque el valor inicial no es \`female\`
        <input type="radio" {...registerRadio('gender', 'female')} />
      </form>
    );
  };
  
`;

export const exmapleSetInputValue: string = `
  const Component = () => {
    const { registerInput, setInputValue,vaues } = useForm();

    const handleClick = () => {
      setInputValue('name', 'jose')
      setInputValue('lastname', 'gonzalez')
      setInputValue('email', 'jose@gmail.com');
    };

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
        <input type="text" {...registerInput('email')} />
        <button onClick={handleClick}>rellenar fomulario</button>
      </form>
    );
  };

  // valores antes del click
  { name: "", lastname: "", email: "" }

  // valores despues del click
  { name: "jose", lastname: "gonzalez", email: "jose@gmail.com" }

`;

export const exampleReset: string = `
  const Component = () => {
    const { registerInput, reset } = useForm();

    const handleClick = () => reset();
    
    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
        <input type="text" {...registerInput('email')} />
        <button onClick={handleClick}>Reset</Button>
      </form>
    )
  };
`;

export const exampleCustomValie1: string = `
  const Component = () => {
    const { registerInput, values } = useForm({
      initialValues: { username: "", password: "", customValue: "hi i am a customvalue" }
    }) 

    const handleClick = () => {
      console.log(values)
      // will log:
      // {
      //   username: "",
      //   password: "",
      //   customValue: "hi i am a customvalue",
      // }
    };
  
    return (
      <form>
        <input type="string" {...registerInput('username')} />
        <input type="password" {...registerInput('password')} />
        <button onClick={handleClick}>log form</button>
      </form>
    )
  };

`;

export const exampleCustomValie2: string = `
  const Component = () => {
    const { registerInput, values, setInputValue } = useForm();

    // set custom value on component mount
    useEffect(() => {
      setInputValue('customValue', 'hi i am a customvalue');
    }, [])

    const handleClick = () => {
      console.log(values)
      // will log:
      // {
      //   username: "",
      //   password: "",
      //   customValue: "hi i am a customvalue",
      // }
    };
  
    return (
      <form>
        <input type="string" {...registerInput('username')} />
        <input type="password" {...registerInput('password')} />
        <button onClick={handleClick}>log form</button>
      </form>
    )
  };

`;

export const exampleCustomValie3: string = `
  const Component = () => {
    const { registerInput, values } = useForm({
      initialValues: {
        username: "",
        password: "",
        customValue1: "hi i am a customvalue 1",
        customValue2: "hi i am a customvalue 2",
      }
    })

    // update customValue1 on mount component
    useEffect(() => {
      setInputValue('customValue1', "value updated");
    }, []);

  
    return (
      <form>
        <input type="string" {...registerInput('username')} />
        <input type="password" {...registerInput('password')} />
      </form>
    )
  };

`;

export const exampleDataPicker: string = `
  const Compoenent = () => {
    const { values, setinputValue } = useForm();

    console.log(values.date1)
    console.log(values.date2)

    return (
      <form>
        <Datapicker
          value={values.date1}
          onChange={(newValue) => setInputValue('date1', newValue)}
        />
        <Datapicker
          value={values.date2}
          onChange={(newValue) => setInputValue('date2', newValue)}
        />
      </form>
    )
  };
`;
