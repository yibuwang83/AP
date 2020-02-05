import * as React from 'react';
import ButtonExampleButton from '../../universal/ButtonExampleButton'
import { Button, Icon } from 'semantic-ui-react'

export interface ILogsProps {
}

export default function Logs(props: ILogsProps) {
    return (
        <div>
            <ButtonExampleButton />

            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Button animated='vertical'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
            <Button animated='fade'>
                <Button.Content visible>Sign-up for a Pro account</Button.Content>
                <Button.Content hidden>$12.99 a month</Button.Content>
            </Button>
        </div>
    );
}
