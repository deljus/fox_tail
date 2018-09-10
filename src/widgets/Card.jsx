import React from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default ({ image, className, description, style, title, ...rest }) => 
{
    const avatar = image ? <Avatar src={image} /> : null;
    return (
    <div>
        <Card {...rest} >
            <Meta 
            {...{ 
            avatar, 
            className, 
            description, 
            style, 
            title }}
            />
        </Card>
    </div>
 )
};