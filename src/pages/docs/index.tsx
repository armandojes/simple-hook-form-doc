import { FC } from 'react';
import Highlight from 'react-highlight';
import LayoutDividedWithMenu, { ImenuItems } from '../../components/layoutDividedWithMenu';
import Resalt from '../../components/resalt';
import {
  basicUsageHtml,
  basicUsageReactWithSHF,
  chackboxExample,
  completeBasicExample,
  radioExample,
  registerInputExamples,
} from './codesExamples';
import { Title, Paragrapph, Section } from './components';

const menuItems: ImenuItems = [
  { label: 'Introducción', location: '/docs#start' },
  { label: 'Ejemplo básico', location: '/docs#basic-usage' },
  { label: 'Registrar entradas', location: '/docs#register-input' },
  { label: 'Checkbox y radio', location: '/docs#checkbox-radio' },
  { label: 'Valores del formulario', location: '/docs#submit' },
];

const Docs: FC = () => (
  <LayoutDividedWithMenu menuItems={menuItems}>
    <>
      <Section>
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
      <Section>
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
      <Section>
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
      <Section>
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
    </>
  </LayoutDividedWithMenu>
);

export default Docs;
