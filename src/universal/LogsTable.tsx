import React, { useState } from 'react'
import { Icon, Label, Menu, Table, Input, Button } from 'semantic-ui-react'

const LogsTable = () => {

    const [scenarioId, setScenarioId] = useState('')
    const [carBuild, setCarBuild] = useState('')

    console.log(scenarioId, carBuild)
    return (
        <div>
            <Button onClick={() => {
                setCarBuild('');
                setScenarioId('');
            }}>Clean</Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            scenarioId
                    <br />
                            <Input value={scenarioId} onChange={(e) => setScenarioId(e.target.value)} focus placeholder='Search...' />
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            carBuild
                    <Input value={carBuild} onChange={(e) => setCarBuild(e.target.value)} focus placeholder='Search...' />
                        </Table.HeaderCell>
                        <Table.HeaderCell>startTime </Table.HeaderCell>
                        <Table.HeaderCell>runningTime / maxRunningTime </Table.HeaderCell>
                        <Table.HeaderCell>numberOfStops / maxNumberOfStops </Table.HeaderCell>
                        <Table.HeaderCell>hasCollision </Table.HeaderCell>
                        <Table.HeaderCell>doesScenarioPass </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>)
}


export default LogsTable