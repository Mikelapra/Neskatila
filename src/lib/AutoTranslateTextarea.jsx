import { useState } from 'react';
import { useNeskatila } from "./useNeskatila";
import PropTypes from "prop-types";


// Este es un componente que utiliza el Custom Hook "useNeskatila" para traducir automaticamente el contenido que haya en un input mediante onBlur.


export const AutoTranslateTextArea = (props) => {
    const { sourceLanguage, targetLanguage } = props;
    const { translate } = useNeskatila();
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleTranslate = async (event) => {
        try {
            const texto = await translate(sourceLanguage, targetLanguage, event.target.value);
            setTextAreaValue(texto);
            console.log(texto);
        } catch (error) {
            console.error(error);
        }
    };


        // El valor del input se actualiza con "handleChange". Este actualiza el estado "textAreaValue" del texto introducido.


    const handleChange = async (event) => {


        // El resultado de la traduccion se guarda en el estado "textAreaValue", que se muestra en el Input.


        setTextAreaValue(event.target.value);
    };

    return (
        <textarea value={textAreaValue} onChange={handleChange} onBlur={handleTranslate} placeholder="Escribe los textos de tu Web"></textarea>
    )
}


// PropTypes permite validar las props que se van pasar a los componentes, en este caso AutoTranslatedLabel, ya que esta destinado a ser reutilizados en otros codigos. De esta manera,
// verificamos si las propiedades cumplen con los valores que queresmos para este componente. Nos sirve como una deteccion temprana de errores al recibir propiedades con valores incorrectos.


AutoTranslateTextArea.propTypes = {
    sourceLanguage: PropTypes.string,
    targetLanguage: PropTypes.string,
};
