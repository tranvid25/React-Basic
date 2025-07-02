import React from 'react';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';
const Paragraph = () => {
    const theme=useContext(ThemeContext)
    return (
        <div className={theme}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sequi sint dolorem odio voluptatum exercitationem voluptate minima, nulla cumque assumenda, fuga pariatur tenetur eaque sed quo provident blanditiis. Temporibus, numquam!
        </div>
    );
};

export default Paragraph;