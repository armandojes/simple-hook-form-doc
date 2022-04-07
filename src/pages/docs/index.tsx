import { Box } from '@mui/material';
import { FC } from 'react';
import Highlight from '../../components/highlight';
import LayoutDividedWithMenu, { ImenuItems } from '../../components/layoutDividedWithMenu';
import Resalt from '../../components/resalt';
import ScrollRestoration from '../../components/scrollRestoration';
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
  { label: 'Uso básico', location: '/docs#basic-usage' },
  { label: 'Registrar entradas', location: '/docs#register-input' },
  { label: 'Checkbox y radio', location: '/docs#checkbox-radio' },
  { label: 'Valores iniciales', location: '/docs#initial-values' },
  { label: 'Actualización de valores', location: '/docs#set-state' },
  { label: 'Reset', location: '/docs#reset' },
  { label: 'Valores personalizados', location: '/docs#custom-values' },
  { label: 'Integración con inputs personalizados', location: '/docs#custom-input' },
  { label: 'Manejo de errores', location: '/docs#intro-errors' },
  { label: 'Limpiar errores', location: '/docs#clean-errors' },
  { label: 'Inputs anidados', location: '/docs#nested-inputs' },
];

const Docs: FC = () => (
  <LayoutDividedWithMenu menuItems={menuItems}>
    <>
      <ScrollRestoration />
      <Section id="start">
        <Title>Introducción</Title>
        <Paragrapph>
          simple-hook-form es una librería simple, liviana y flexible para manejar formularios en react, su función
          principal es sincronizar el valor de los inputs con el estado de react.
        </Paragrapph>
        <Paragrapph>
          Al principio se pensó en integrar validadores de inputs justo como lo hacen las demás librarías, al final
          decidimos no incluirlo para darle mayor flexibilidad y que el desarrollador pueda instalar su propio validador
          como yup, joi, validateJs, entre muchos otros...
        </Paragrapph>
      </Section>
      <Section id="basic-usage">
        <Title>Uso básico</Title>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> es muy simple y es fácil de razonar en todo momento, este es el ejemplo más
          simple, primero comencemos con un formulario simple sin estado.
        </Paragrapph>
        <Highlight language="javascript">{basicUsageHtml}</Highlight>
        <Paragrapph>
          Ahora agregamos <Resalt>simple-hook-form</Resalt> para sincronizar el valor de los inputs con el estado de
          react.
        </Paragrapph>
        <Highlight language="javascript">{basicUsageReactWithSHF}</Highlight>
        <Paragrapph>
          Listo, esto es todo lo necesario, ahora todo lo que el usuario ingrese dentro del formulario estará disponible
          como un objeto en la variable <Resalt>values</Resalt> devuelto por <Resalt>useForm</Resalt>.
        </Paragrapph>
      </Section>
      <Section id="register-input">
        <Title>Registrar entradas</Title>
        <Paragrapph>
          Usamos la función <Resalt>registerInput</Resalt> para sincronizar el input con el estado interno de{' '}
          <Resalt>simple-hook-form</Resalt>
        </Paragrapph>
        <Paragrapph>
          <Resalt>registerInput</Resalt> requiere un parámetro obligatorio de tipo string que será usado como
          identificador único del input.
        </Paragrapph>
        <Highlight language="xml">{registerInputExamples}</Highlight>
      </Section>
      <Section id="checkbox-radio">
        <Title>Registrar checkbox y radio</Title>
        <Paragrapph>
          Los inputs de tipo checkbox y radio son especiales, esto es porque los checkbox solo pueden tener dos valores
          marcado o no marcado y los inputs de tipo radio solo permite elegir una opción entre un grupo de opciones.
        </Paragrapph>
        <Paragrapph>
          <Resalt>useForm</Resalt> nos devuelve la función <Resalt>registerCheckbox</Resalt> para manejar los inputs de
          tipo checkbox.
        </Paragrapph>
        <Highlight language="javascript">{chackboxExample}</Highlight>
        <Paragrapph>
          También tenemos <Resalt>registerRadio</Resalt> para manejar los inputs de tipo radio,{' '}
          <Resalt>RegisterRadio</Resalt> requiere dos parámetros, el primero es el identificador y el segundo es el
          valor, vea el siguiente ejemplo:
        </Paragrapph>
        <Highlight language="javascript">{radioExample}</Highlight>
      </Section>
      <Section>
        <Title>Ejemplo completo</Title>
        <Paragrapph>Aquí hay un ejemplo completo de los tipos de inputs junto con el envío usando axios</Paragrapph>
        <Highlight language="javascript">{completeBasicExample}</Highlight>
      </Section>
      <Section id="initial-values">
        <Title>Valores iniciales</Title>
        <Paragrapph>
          En muchas ocasiones necesitamos manejar valores iniciales en un formulario, con{' '}
          <Resalt>simple-hook-form</Resalt> esto muy fácil, la función <Resalt>useForm</Resalt> acepta un objeto de
          configuraciones donde le podemos pasar los valores iniciales. <Resalt>registerInput</Resalt> se encargará
          pasar el valor inicial correspondiente a cada input.
        </Paragrapph>
        <Highlight language="javascript">{initialValuesInput}</Highlight>
        <Paragrapph>
          En el caso de los inputs de tipo checkbox simplemente pasamos un booleano como valor inicial,{' '}
          <Resalt>registerCheckbox</Resalt> se encargara de generar la propiedad checked.
        </Paragrapph>
        <Highlight language="javascript">{booleanDefaultValue}</Highlight>
        <Paragrapph>
          Para los inputs de tipo radio, se marcará automaticamente la opcion correcta, register radio se encarga de
          generar la propiedad `checked` en base al estado inicial
        </Paragrapph>
        <Highlight language="javascript">{exampleRadio}</Highlight>
      </Section>
      <Section id="set-state">
        <Title>Actualización de valores</Title>
        <Paragrapph>
          A menudo necesitamos actualizar los valores del formulario de forma programática, basado en algún evento o
          acciones del usuario, para ello tenemos la función <Resalt>setInputValue</Resalt> para establecer de forma
          programática el valor de un input. <Resalt>setInputValue</Resalt> requiere dos parámetros `inputName` y
          `newInputValue`.
        </Paragrapph>
        <Paragrapph>
          En el siguiente ejemplo, el valor de los inputs se establecen de forma programática con el evento `click` del
          botón.
        </Paragrapph>
        <Highlight language="javascript">{exmapleSetInputValue}</Highlight>
      </Section>
      <Section id="reset">
        <Title>Reset</Title>
        <Paragrapph>
          Es común querer resetear los valores del formulario, para ello tenemos la función <Resalt>reset</Resalt>, esta
          función resetea el formulario a su valor inicial.
        </Paragrapph>
        <Highlight language="javascript">{exampleReset}</Highlight>
      </Section>
      <Section id="custom-values">
        <Title>Valores personalizado</Title>
        <Paragrapph>
          En ocasiones necesitamos enviar algún valor personalizado que no forme parte de los inputs del formulario, por
          ejemplo al iniciar sesión talvez queremos enviar la fecha o cualquier otro valor arbitrario, para ello tenemos
          dos formas de hacerlo:
        </Paragrapph>
        <Box color="#fff">
          <ul>
            <li>Establecerlo como parte del valor inicial.</li>
            <li>
              Usar la función <Resalt>setInputValue</Resalt> para establecer el valor.
            </li>
          </ul>
        </Box>
        <Paragrapph>
          En el siguiente ejemplo, tenemos un valor personalizado que se inicializa como parte del valor inicial
        </Paragrapph>
        <Highlight language="javascript">{exampleCustomValie1}</Highlight>
        <Paragrapph>
          En el siguiente ejemplo se establece el valor personalizado usando la función <Resalt>setInputValue</Resalt>
        </Paragrapph>
        <Highlight language="javascript">{exampleCustomValie2}</Highlight>
        <Paragrapph>
          Los valores personalizados son tratados como parte del formulario, podemos tener múltiples valores
          personalizados, inicializarlos como parte del valor inicial, establecerlos en marcha con{' '}
          <Resalt>setInputValue</Resalt>, también podemos primero iniciarlo como parte del valor inicial y sobre la
          marcha actualizar su valor con <Resalt>setInputValue</Resalt>
        </Paragrapph>
        <Highlight language="javascript">{exampleCustomValie3}</Highlight>
      </Section>
      <Section id="custom-input">
        <Title>Integración con inputs personalizados</Title>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> se integra de forma fácil con cualquier tipo de inputs personalizados, por
          ejemplo inputs de tipo file, dropzone, switch, datePicker, etc... <br />
          Con la función <Resalt>setInputValue</Resalt> simplemente establecemos el identificador y el valor del input.
        </Paragrapph>
        <Paragrapph>
          Aquí hay un ejemplo con el componente DatePicker de material-ui pickers, recibe como props{' '}
          <Resalt>value</Resalt> y la función <Resalt>onChange</Resalt> que nos devuelve la fecha seleccionada.
        </Paragrapph>
        <Highlight language="javascript">{exampleDataPicker}</Highlight>
      </Section>
      <Section id="intro-errors">
        <Title>Introducción al manejo de errores</Title>
        <Paragrapph>
          Si bien <Resalt>simple-hook-form</Resalt> no integra ningún método para validar inputs, si integra mecanismos
          simples para facilitar el manejo de errores.
        </Paragrapph>
        <Paragrapph>
          El mecanismo de manejo de errores consta de tres partes fundamentales: <br />
        </Paragrapph>
        <Box color="#fff">
          <ul>
            <li>
              <Resalt>formErrors (object)</Resalt>: Un objeto de errores.
            </li>
            <li>
              <Resalt>setFormErrors (function)</Resalt>: Una función para actualizar el objeto de errores.
            </li>
            <li>
              <Resalt>error: (boolean)</Resalt>: propiedad que se inyecta al input.
            </li>
          </ul>
        </Box>
        <Paragrapph>
          <Resalt>formErrors</Resalt> es un simple objeto con la descripción de los errores. Por ejemplo
        </Paragrapph>
        <Highlight language="javascript">{formErrorsExample}</Highlight>
        <Paragrapph>
          Usaremos este objeto de errores para mostrar mensajes en alguna parte de nuestra interfaz, en el siguiente
          ejemplo se muestran el error correspondiente debajo de cada input.
        </Paragrapph>
        <Highlight language="javascript">{formErrorsExample2}</Highlight>
        <Paragrapph>Demostración interactiva del código anterior:</Paragrapph>
        <DemoFormErrors />
        <Paragrapph>
          Ya hemos visto como funcionan <Resalt>formErrors</Resalt> y <Resalt>setFormErrors</Resalt> en el ejemplo
          anterior, ahora veamos como funciona la propiedad <Resalt>error</Resalt> que se inyecta al input.
        </Paragrapph>
        <Paragrapph>
          Las funciones `registerInput`, `registerRadio` y `registerCheckbox` inyectan la propiedad{' '}
          <Resalt>error</Resalt> de tipo `boolean` al input.
        </Paragrapph>
        <Paragrapph>
          Como funciona es que primero se verifica el objeto de errores, si se encuentra un error definido para el input
          entonces se inyecta la propiedad <Resalt>error: true</Resalt> si no hay un error se inyecta{' '}
          <Resalt>error: false</Resalt>, vea el siguiente ejemplo:
        </Paragrapph>
        <Highlight language="javascript">{propError}</Highlight>
        <Paragrapph>
          Ya hemos visto como se define la propiedad <Resalt>error</Resalt> inyectada al input, ahora vamos a preparar
          nuestro input para cambiar el color del borde a rojo basándonos en la propiedad `error`. <br />
        </Paragrapph>
        <Paragrapph>
          Nota: La mayoría de las librerías de interfaces ya viene preparado para actuar con base en la propiedad{' '}
          <Resalt>error</Resalt>, por ejemplo material UI colorea el borde del input en rojo si se le pasa la propiedad{' '}
          <Resalt>error: true</Resalt>, en esta ocasión crearemos nuestro propio input para manejar la propiedad{' '}
          <Resalt>error</Resalt>.
        </Paragrapph>
        <Highlight language="javascript">{inputWithPropError}</Highlight>
        <Paragrapph>
          En el código anterior coloreamos el borde del input usando estilos en línea basada en la prop{' '}
          <Resalt>error</Resalt>; sin embargo, usted es libre de manejarlo como desee, puede alternar clases, puede
          manejarlo con styled-componentes, etc...
        </Paragrapph>
        <Paragrapph>
          Ahora vamos a usar nuestro nuevo componente <Resalt>GenericInput</Resalt>
        </Paragrapph>
        <Highlight language="javascript">{useingGenericInput}</Highlight>
        <Paragrapph>Ahora nuestros inputs deberían cambiar su borde a color rojo si hay un error</Paragrapph>
        <DemoFormErrorsCustomInput />
        <Paragrapph>
          Como hemos mencionado anteriormente, usted es el responsable de validar su formulario y de proporcionar el
          objeto de errores <Resalt>formErrors</Resalt> para actualizar su interfaz.
        </Paragrapph>
      </Section>
      <Section id="clean-errors">
        <Title>Limpiar errores</Title>
        <Paragrapph>
          Como seguramente habrás notado, los errores se limpian automáticamente con el evento <Resalt>focus</Resalt>{' '}
          del input.
          <br />
          Las funciones <Resalt>registerInput</Resalt>, <Resalt>registerCheckbox</Resalt> y{' '}
          <Resalt>registerRadio</Resalt> inyectan la función <Resalt>onFocus</Resalt> al input para limpiar los errores.
        </Paragrapph>
        <Paragrapph>
          Si necesitas limpiar todos los errores del formulario de forma programática simplemente ejecute la función{' '}
          <Resalt>setFormErrors</Resalt> pasándole como argumento un objeto vacío.
        </Paragrapph>
        <Paragrapph>
          Si necesita limpiar el error de algún input en específico proporcionamos la función{' '}
          <Resalt>removeInputError</Resalt> recibe como parámetro el nombre del input.
        </Paragrapph>
        <Highlight language="javascript">{cleaningErrors}</Highlight>
      </Section>
      <Section id="nested-inputs">
        <Title>Inputs anidados</Title>
        <Paragrapph>
          No todos los formularios son tan simples como hemos visto en los ejemplos anteriores, a veces es necesario
          dividir un formulario complejo en piezas más pequeñas.
        </Paragrapph>
        <Paragrapph>
          Considera el siguiente ejemplo, tenemos un formulario de dos pasos, en el paso 1 capturamos los datos
          generales y en el segundo paso capturamos datos más específicos.
        </Paragrapph>
        <Highlight language="javascript">{formWithMultipleStepes}</Highlight>
        <Paragrapph>
          Lo que hemos hecho es pasar la función <Resalt>registerInput</Resalt> como prop a los componentes{' '}
          <Resalt>GeneralInput</Resalt> y <Resalt>SpecificData</Resalt>. Si necesitamos mostrar errores tendríamos que
          pasar la el objeto de errores también y la función para setear o remover errores, y cuando tengamos
          componentes con más niveles de anidamiento tendríamos que pasar estas props en todo el árbol de componentes y
          eso se vuelve fácilmente inmanejable.
        </Paragrapph>
        <Paragrapph>
          Este es un buen escenario para usar <Resalt>React.context</Resalt> para solucionar este problema y{' '}
          <Resalt>simple-hook-form</Resalt> ya viene listo para esto.
        </Paragrapph>
        <Paragrapph>
          <Resalt>simple-hook-form</Resalt> exporta el componente <Resalt>FormProvider</Resalt> para compartir los
          métodos del formulario y <Resalt>useFormContext</Resalt> para obtener acceso a los métodos del formulario.
        </Paragrapph>
        <Paragrapph>
          A <Resalt>FormProvider</Resalt> le tenemos que pasar todos los métodos y propiedades devueltos por{' '}
          <Resalt>useForm</Resalt>
        </Paragrapph>
        <Highlight language="javascript">{formProvider}</Highlight>
        <Paragrapph>
          Con el hook <Resalt>useFormContext</Resalt> obtenemos acceso a todos los métodos y propiedades devueltos por{' '}
          <Resalt>useForm</Resalt>
        </Paragrapph>
        <Highlight language="javascript">{useFormContextExample}</Highlight>
        <Paragrapph>
          Ahora, continuando con nuestro ejemplo anterior del formulario de dos pasos, usando el contexto se vería así:
        </Paragrapph>
        <Highlight language="javascript">{formContextWithSpeps2}</Highlight>
      </Section>
    </>
  </LayoutDividedWithMenu>
);

export default Docs;
