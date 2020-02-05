
export interface ITest {
    simulationRuns: ISimulationRuns[]
    scenarios: IScenarios[]
}

export interface IScenarios {
    scenarioId: string;
    maxnumberOfStops: number;
    maxRunningTime: number
}

export interface ISimulationRuns {
    startTime: number;
    endTime: number;
    scenarioId: string,
    carBuild: string,
    result: IResult
}

export interface IResult {
    numberOfStops: number
    hasCollision: boolean
}
