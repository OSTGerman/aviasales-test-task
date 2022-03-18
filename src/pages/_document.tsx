import Document, { Html, Head, NextScript, Main, DocumentContext, DocumentInitialProps } from 'next/document';
import React from 'react';
import sprite from 'svg-sprite-loader/runtime/sprite.build';

interface MyDocumentInitialProps extends DocumentInitialProps {
    spriteContent: any;
}
class MyDocument extends Document<MyDocumentInitialProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        const spriteContent = sprite.stringify();

        return {
            spriteContent,
            ...initialProps,
        };
    }
    render(): React.ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
