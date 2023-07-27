import { Typography, Divider, Button, Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Help = () => {
    return (
        <Content 
            className='md-writer' 
            style={{
                width: '100vw',
                height: 'calc(100vh - 64px)',
                padding: '0 50px',
                backgroundColor: 'white',
            }}
        >
            <Typography.Title>What's Markdown?</Typography.Title>
            <Divider />
            <Typography.Paragraph style={{fontStyle: ''}}>
                Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form. Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files. 
                <Button type="link" href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer" style={{padding: 5}}>(Wikipedia)</Button>
            </Typography.Paragraph>

            <Typography.Paragraph>
                Using Markdown is different than using a WYSIWYG (What You See Is What You Get) editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.
                For example, to denote a heading, you add a number sign before it (e.g., # Heading One). Or to make a phrase bold, you add two asterisks before and after it (e.g., **this text is bold**). It may take a while to get used to seeing Markdown syntax in your text, especially if you’re accustomed to WYSIWYG applications. 
                <Button type="link" href="https://www.markdownguide.org/getting-started/" target="_blank" rel="noreferrer" style={{padding: 5}}>(markdownguide.org)</Button>
            </Typography.Paragraph>

            <Typography.Paragraph>
                Some of the things you can do with Markdown are:
            </Typography.Paragraph>

            <ul>
                <li>Headings - write up to 6 hashtags and a space after before your heading text (# Heading)</li>
                <li>Bold text - enclose your text between four asterisks (** bold **)</li>
                <li>Italic text - enclose your text between two asterisks (* italic *)</li>
                <li>Strikethrough text - enclose your text between four tildes (~~ strikethrough ~~)</li>
                <li>Blockquotes - write a "greater than" sign before it (> blockquote)</li>
                <li>Unordered list - write an asterisk before your item (* item 1)</li>
                <li>Ordered list - write a number and a dot before the item (1. item 1)</li>
                <li>Link - enclose your name between squared parenthesis and right after it enclose the URL between normal parenthesis [Markdown Writer](https://alessandro-sherhey.github.io/markdown-writer)</li>
            </ul>

            <Typography.Paragraph>
                As you can see, it's not so difficult! :) You can quite easily remember the basic stuff, or you can use online editors such as <Button type="link" href="https://stackedit.io/app#" target="_blank" rel="noreferrer" style={{padding: 5}}>StackEdit</Button>, or this ;)
            </Typography.Paragraph>
        </Content>
    )
}

export default Help;