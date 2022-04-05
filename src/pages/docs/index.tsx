import { FC } from 'react';
import Highlight from 'react-highlight';
import LayoutDividedWithMenu, { ImenuItems } from '../../components/layoutDividedWithMenu';
import Resalt from '../../components/resalt';
import {
  basicUsageHtml,
  basicUsageReactWithSHF,
  booleanDefaultValue,
  chackboxExample,
  cleaningErrors,
  completeBasicExample,
  exampleCustomValie1,
  exampleCustomValie2,
  exampleCustomValie3,
  exampleDataPicker,
  exampleRadio,
  exampleReset,
  exmapleSetInputValue,
  formContextWithSpeps2,
  formErrorsExample,
  formErrorsExample2,
  formProvider,
  formWithMultipleStepes,
  initialValuesInput,
  inputWithPropError,
  propError,
  radioExample,
  registerInputExamples,
  useFormContextExample,
  useingGenericInput,
} from './codesExamples';
import { Title, Paragrapph, Section } from './components';
import { DemoFormErrors, DemoFormErrorsCustomInput } from './demos';

const menuItems: ImenuItems = [
  { label: 'Introducción', location: '/docs#start' },
  { label: 'Uso basico', location: '/docs#basic-usage' },
  { label: 'Registrar entradas', location: '/docs#register-input' },
  { label: 'Checkbox y radio', location: '/docs#checkbox-radio' },
  { label: 'Valores iniciales', location: '/docs#initial-values' },
  { label: 'Actualizacion de valores', location: '/docs#set-state' },
  { label: 'Reset', location: '/docs#reset' },
  { label: 'Valores personalizados', location: '/docs#custom-values' },
  { label: 'Integracion con inputs personalizados', location: '/docs#custom-input' },
  { label: 'Manejo de errores', location: '/docs#intro-errors' },
  { label: 'Limpiar errores', location: '/docs#clean-errors' },
  { label: 'Inputs anidados', location: '/docs#nested-inputs' },
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
      <Section id="intro-errors">
        <Title>Introduccion al manejo de errors</Title>
        <Paragrapph>
          Si bien <Resalt>simple-hook-form</Resalt> no integra ningun metodo para validar inputs, si integra mecanismos
          simples para facilitar el manejo de errores.
        </Paragrapph>
        <Paragrapph>
          El mecanismo de manejo de errores consta de tres partes fundamentales: <br />
          <ul>
            <li>
              <Resalt>formErrors (object)</Resalt>: Un objeto de errores.
            </li>
            <li>
              <Resalt>setFormErrors (function)</Resalt>: Una funcion para actualizar el objeto de errores.
            </li>
            <li>
              <Resalt>error: (boolean)</Resalt>: propiedad que se inyecta al input.
            </li>
          </ul>
        </Paragrapph>
        <Paragrapph>
          <Resalt>formErrors</Resalt> es sun simple objeto con la descripcion de los errores. por ejemplo
          <Highlight className="javascript">{formErrorsExample}</Highlight>
        </Paragrapph>
        <Paragrapph>
          Usaremos este objeto de errores para mostrar mensajes en alguna parte de nuestra interfaz, en el siguente
          ejemplo se muetran el error correspondiente debajo de cada input.
        </Paragrapph>
        <Highlight className="javascript">{formErrorsExample2}</Highlight>
        <Paragrapph>Demostracion interactivo del codigo anterior</Paragrapph>
        <DemoFormErrors />
        <Paragrapph>
          Ya hemos visto como funcionan <Resalt>formErrors</Resalt> y <Resalt>setFormErrors</Resalt> en el ejemplo
          anterior, ahora veamos como funcion la propiedad error que se inyecta al input.
        </Paragrapph>
        <Paragrapph>
          Las funciones `registerInput`, `registerRadio` y `registerCheckbox` injectan la propedad error de tipo
          `boolean` al input.
        </Paragrapph>
        <Paragrapph>
          Como funciona es que primero se verifica el objeto de errores, si se encuentrar un error definido para el
          input entonces se injecta la propiedad `error: true` si no hay un error se injecta `error: false`: vea el
          siguente ejemplo:
        </Paragrapph>
        <Highlight className="javascript">{propError}</Highlight>
        <Paragrapph>
          Ya hemos visto como se define la propiedad error injectada al input, ahora vamos a preparar nuestro input para
          cambiar el color del borde a rojo en base a la propiedad `error`. <br />
        </Paragrapph>
        <Paragrapph>
          Nota: La mayoria de las librerias de interfaces ya viene preparado para actuar en base a la propiedad error,
          por ejemplo material UI colorea el borde del input en rojo si se le pasa la propiedada `error: true`, en esta
          ocacion crearemos nuestro propio input para manejar la prop `error`.
        </Paragrapph>
        <Highlight className="javascript">{inputWithPropError}</Highlight>
        <Paragrapph>
          En el codigo anterior coloreamos el borde del input usando estilos en linea basado en la prop error, sin
          embargo usted es libre de manejarlo como desee, puede alternar clases, puede manejarlo con styled-componentes,
          etc..
        </Paragrapph>
        <Paragrapph>Ahora vamos a usar nuestro nuevo component `genericInput`</Paragrapph>
        <Highlight className="javascript">{useingGenericInput}</Highlight>
        <Paragrapph>Ahora nuestros inputs deberian cambiar su borde a color rojo si hay un error</Paragrapph>
        <DemoFormErrorsCustomInput />
        <Paragrapph>
          Como hemos mencionado anteriormente usted es el responsable de validar su formulario y de proporcionar el
          objeto de errors <Resalt>formErrors</Resalt> para actualizar su interfaz.
        </Paragrapph>
      </Section>
      <Section id="clean-errors">
        <Title>Limpiar Errores</Title>
        <Paragrapph>
          Como seguramente habras notado los errores se limpian automaticamente con el evento <Resalt>focus</Resalt> del
          input.
          <br />
          Las funciones <Resalt>registerInput</Resalt>, <Resalt>registerCheckbox</Resalt> y{' '}
          <Resalt>registerRadio</Resalt> injectan la funcion onFocus al input para limpiar los errores. <br />
        </Paragrapph>
        <Paragrapph>
          Si necesita limpiar todos los errores del formulario de forma programatica simplemente ejecute la funcion{' '}
          <Resalt>setFormErrors</Resalt> pasandole como argumento un objeto vacío.
        </Paragrapph>
        <Paragrapph>
          Si necesita limpiar el error de algun input en especifico proporcionamos la funcion{' '}
          <Resalt>removeInputError</Resalt> recibe como parametro el nombre del input.
        </Paragrapph>
        <Highlight className="javascript">{cleaningErrors}</Highlight>
      </Section>
      <Section id="nested-inputs">
        <Title>Inputs anidados</Title>
        <Paragrapph>
          No todos los formularios son tan simples como hemos visto en los ejemplos anteriores, a veces es necesario
          dividir un formulario complejo en piezas mas pequeñas.
        </Paragrapph>
        <Paragrapph>
          Considera el siguente ejemplo, tenemos un formulario de dos pasos, en el paso 1 capturamos los datos generales
          y en el segundo paso capturamos datos mas espesificos.
        </Paragrapph>
        <Highlight className="javascript">{formWithMultipleStepes}</Highlight>
        <Paragrapph>
          Lo que hemos hecho es pasar la funcion <Resalt>registerInput</Resalt> como prop a los componentes{' '}
          <Resalt>GeneralInput</Resalt> y <Resalt>SpecificData</Resalt>. Si necesitamos mostrar errores tendriamos que
          pasar la el objeto de errores tambien y la funcion para setear o remover errores, y cuando tengamos
          componentes con mas niveles de anidamiento tendriamos que pasar estas props en todo el arbol de componentes y
          eso se vuelve facilmente inmanejable.
        </Paragrapph>
        <Paragrapph>
          Este es un buen escenario para usar <Resalt>React.context</Resalt> para solucionar este problema y{' '}
          <Resalt>simple-hook-form</Resalt> ya viene listo para esto.
        </Paragrapph>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> exporta el component <Resalt>FormProvider</Resalt> para compartir los
          metodos del formulario y <Resalt>useFormContext</Resalt> para obtener acceso a los methodos del formulario.
        </Paragrapph>
        <Paragrapph>
          A <Resalt>FormProvider</Resalt> le tenemos que pasar todos los metodos y propiedades devueltos por{' '}
          <Resalt>useForm</Resalt>
        </Paragrapph>
        <Highlight className="javascript">{formProvider}</Highlight>
        <Paragrapph>
          con el hook <Resalt>useFormContext</Resalt> obtenemos acceso a todo los metdos y propiedades devueltos por
          <Resalt>useForm</Resalt>
        </Paragrapph>
        <Highlight className="javascript">{useFormContextExample}</Highlight>
        <Paragrapph>
          Ahora continuando con nuestro ejemplo anterior del formulario de dos pasos, usando el contexto se veria asi:
        </Paragrapph>
        <Highlight className="javascript">{formContextWithSpeps2}</Highlight>
      </Section>
    </>
  </LayoutDividedWithMenu>
);

export default Docs;
