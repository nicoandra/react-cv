import React, { useState } from "react";
import PropTypes from "prop-types";
import Markdown from 'react-markdown'

function MarkdownLoader(props) {
    const [content, setContent] = useState('');

    fetch(props.url, {
        method: "GET",
    }).then((r) => {
        return r.text();
    }).then((r) => {
        setContent(r);
    })

    return (content.length && <Markdown source={content} />)

}

export default MarkdownLoader