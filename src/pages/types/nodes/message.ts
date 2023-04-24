export type WhatsAppMessageProp = {
    isUsed: boolean;
    value: string;
}

export type MessageNodeDataProp = {
    header: WhatsAppMessageProp;
    body: WhatsAppMessageProp;
    footer: WhatsAppMessageProp;
    buttons: {
        isUsed: boolean;
        value: string[];
    }
}

type MessageHeaderPropertiesData = {
    subtitle: string,
    hint: string,
    link: string,
}
export type MessageHeaderData = {
    image: MessageHeaderPropertiesData,
    video: MessageHeaderPropertiesData,
    document: MessageHeaderPropertiesData,
}