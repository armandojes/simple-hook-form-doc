import { FC } from 'react';
import Highlight from 'react-highlight';
import LayoutDividedWithMenu, { ImenuItems } from '../../components/layoutDividedWithMenu';
import Resalt from '../../components/resalt';
import {
  basicUsageHtml,
  basicUsageReactWithSHF,
  booleanDefaultValue,
  chackboxExample,
  completeBasicExample,
  exampleCustomValie1,
  exampleCustomValie2,
  exampleCustomValie3,
  exampleDataPicker,
  exampleRadio,
  exampleReset,
  exmapleSetInputValue,
  initialValuesInput,
  radioExample,
  registerInputExamples,
} from './codesExamples';
import { Title, Paragrapph, Section } from './components';

const menuItems: ImenuItems = [
  { label: 'Introducción', location: '/docs#start' },
  { label: 'Uso basico', location: '/docs#basic-usage' },
  { label: 'Registrar entradas', location: '/docs#register-input' },
  { label: 'Checkbox y radio', location: '/docs#checkbox-radio' },
  { label: 'Valores iniciales', location: '/docs#initial-values' },
  { label: 'Actualizacion de valores', location: '/docs#set-state' },
  { label: 'Reset', location: '/docs#reset' },
  { label: 'Valores personalizados', location: '/docs#custom-values' },
  { label: 'integracion con inputs personalizados', location: '/docs#custom-input' },
];

const Docs: FC = () => (
  <LayoutDividedWithMenu menuItems={menuItems}>
    <>
      <Section id="start">
        <Title>Introduccion</Title>
        <Paragrapph>
          simple-hook-form es una libreria simple, liviana y flexible para manejar formularios en react, su funcion
          principal es sincronizar el valor de los inputs con el estado de react
        </Paragrapph>
        <Paragrapph>
          Al principio se pensó en integrar validadores de inputs justo como lo hacen las demas librerias, al final
          decidimos no incluirlo para darle mayor flexibilidad y que el desarrollador pueda instalar su proppio
          validador como yup, joi, validateJs, entre muchos otros...
        </Paragrapph>
      </Section>
      <Section id="basic-usage">
        <Title>Uso basico</Title>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> es muy simple y facil de razonar en todo momento, este es el ejemplo mas
          simple, primero comencemos con un formulario simple sin estado.
        </Paragrapph>
        <Highlight className="javascript">{basicUsageHtml}</Highlight>
        <Paragrapph>
          Ahora agregamos <Resalt>simple-hook-form</Resalt> para sincronizar el valor de los inputs con el estado de
          react.
        </Paragrapph>
        <Highlight className="javascript">{basicUsageReactWithSHF}</Highlight>
        <Paragrapph>
          Listo, esto es todo lo necesario, ahora todo lo que el usuario ingrese dentro del formularios estara
          dispinible como un objeto en la variable <Resalt>values</Resalt> devuelto por <Resalt>useForm</Resalt>.
        </Paragrapph>
      </Section>
      <Section id="register-input">
        <Title>Registrar entradas</Title>
        <Paragrapph>
          Usamos la funcion <Resalt>registerInput</Resalt> para sincronizar el input con el estado interno de{' '}
          <Resalt>simple-hook-form</Resalt>
        </Paragrapph>
        <Paragrapph>
          <Resalt>registerInput</Resalt> requiere un parametro obligatorio de tipo string que sera usado como
          identificador unico del input.
        </Paragrapph>
        <Highlight className="html">{registerInputExamples}</Highlight>
      </Section>
      <Section id="checkbox-radio">
        <Title>Registrar checkbox y radio</Title>
        <Paragrapph>
          Los inputs de tipo checkbox y radio son especiales, esto es porque los checkbox solo pueden tener dos valores
          marcado o no marcado y los inpust de tipo radio solo permite elegir una opcion entre un grupo de opciones.
        </Paragrapph>
        <Paragrapph>
          <Resalt>useForm</Resalt> nos devuelve la funcion <Resalt>registerCheckbox</Resalt> para manejar los inpusts de
          tipo checkbox.
        </Paragrapph>
        <Highlight className="javascript">{chackboxExample}</Highlight>
        <Paragrapph>
          Tambien tenemos <Resalt>registerRadio</Resalt> para manejar los inputs de tipo radio,{' '}
          <Resalt>RegisterRadio</Resalt> require dos parametros el primero es el identificador y el segundo es el valor,
          vea el siguente ejemplo:
        </Paragrapph>
        <Highlight className="javascript">{radioExample}</Highlight>
      </Section>
      <Section>
        <Title>Ejemplo completo</Title>
        <Paragrapph>Aqui hay un ejemplo completo de los tipos de inputs junto con el envio usando axios</Paragrapph>
        <Highlight className="javascript">{completeBasicExample}</Highlight>
      </Section>
      <Section id="initial-values">
        <Title>Valores iniciales</Title>
        <Paragrapph>
          En muchas ocasiones necesitamos manejar valores inicials en un formulario, con{' '}
          <Resalt>simple-hook-form</Resalt> es to muy facil, la funcion <Resalt>useForm</Resalt> acepta un objeto de
          configuracion donde le podemos pasar los valoes iniciales. <Resalt>registerInput</Resalt> se encargara pasar
          el valor inicial correspondiente a cada input.
        </Paragrapph>
        <Highlight className="javascript">{initialValuesInput}</Highlight>
        <Paragrapph>
          En el caso de los inputs de tipo checkbox simplemente pasamos un booleano como valor inicial,{' '}
          <Resalt>registerCheckbox</Resalt> se encargara de generar la propiedad checked.
        </Paragrapph>
        <Highlight className="javascript">{booleanDefaultValue}</Highlight>
        <Paragrapph>
          Para los inputs de tipo radio, se marcará automaticamente la opcion correcta, register radio se encarga de
          generar la propiedad `checked` en base al estado inicial
        </Paragrapph>
        <Highlight className="javascript">{exampleRadio}</Highlight>
      </Section>
      <Section id="set-state">
        <Title>Actualización de valores</Title>
        <Paragrapph>
          A menudo necesitamos actualizar los valores del formulario de forma programatica, basado en algun evento o
          acciones del usuario, para ello tenemos la funcion <Resalt>setInputValue</Resalt> para estabelecer de forma
          dinamica el valor de un input. <Resalt>setInputValue</Resalt> requiere dos parametros `inputName` y
          `newInputValue`.
        </Paragrapph>
        <Paragrapph>
          En el siguente ejemplo el valor de los inputs de establecen de forma programatica con el evento `click` del
          boton.
        </Paragrapph>
        <Highlight className="javascript">{exmapleSetInputValue}</Highlight>
      </Section>
      <Section id="reset">
        <Title>Reset</Title>
        <Paragrapph>
          Es comun querer resetear los valores del formulario, para ello tenemos la funcion <Resalt>reset</Resalt>, esta
          funcion resetea el formulario a su valor inicial.
          <Highlight className="javascript">{exampleReset}</Highlight>
        </Paragrapph>
      </Section>
      <Section id="custom-values">
        <Title>Valores personalizado</Title>
        <Paragrapph>
          En ocasiones necesitamos enviar algun valor personalizado que no forme parte de los inputs del formulario, por
          ejemplo al iniciar session talvez queremos enviar la fecha o cualquier otro valor arbitrario, para ello
          tenemos dos formas de hacerlo:
          <ul>
            <li>Establecerlo como parte del valor inicial</li>
            <li>
              Usar la funcion <Resalt>setInputValue</Resalt> para establecer el valor
            </li>
          </ul>
        </Paragrapph>
        <Paragrapph>
          El el siguente ejemplo, tenemos un valor personalizado que se inicializa como parte del valor inicial
        </Paragrapph>
        <Highlight className="javascript">{exampleCustomValie1}</Highlight>
        <Paragrapph>
          En el siguente ejemplo se establece el valor personalizado usando la funcion <Resalt>setInputValue</Resalt>
        </Paragrapph>
        <Highlight className="javascript">{exampleCustomValie2}</Highlight>
        <Paragrapph>
          Los `valores personalizados` son tratados como parte del formulario, podemos tener multiples `valores
          personalizados`, inicializarlos como parte del valor inicial, establecerlos en marcha con{' '}
          <Resalt>setInputValue</Resalt>, tambien podemos primero iniciarlo como parte del valor inicial y sobre la
          marcha actualizar su valor con <Resalt>setInputValue</Resalt>
        </Paragrapph>
        <Highlight className="javascript">{exampleCustomValie3}</Highlight>
      </Section>
      <Section id="custom-input">
        <Title>Integracion con inputs personalizados</Title>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> se integra de forma facil con cualquier tipo de inputs personalizados, por
          ejemplo inputs de tipo file, dropzone, switch, dataPicker, etc... <br />
          Con la funcion <Resalt>setInputValue</Resalt> simplemente establecemos el identificador y el valor del input.
        </Paragrapph>
        <Paragrapph>
          Aqui hay un ejemplo con el componente `DatePicker` de `material-ui pickers`, recibe como props `value` y la
          funcion `onChange` que nos devuelve la fecha seleccionada.
        </Paragrapph>
        <Highlight className="javascript">{exampleDataPicker}</Highlight>
      </Section>
    </>
  </LayoutDividedWithMenu>
);

export default Docs;
