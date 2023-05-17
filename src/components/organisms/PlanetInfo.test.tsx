import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {updatePlanet} from '../../redux/actions/planets/types';
import PlanetInfo from './PlanetInfo';
import * as reactRedux from 'react-redux';
import {Planet} from "../../models/planet";


jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../redux/actions/planets/types', () => ({
    updatePlanet: jest.fn(),
}));

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
    },
}));

describe('PlanetInfo', () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatchMock.mockReturnValue(mockDispatch);
    });

    it('renders planet info correctly', () => {
        const planet = new Planet('test',
            'Climate',
            '1234',
            'Terrain',
            '56789',
            'Gravity',
            '5678',
            '9012',
            '34',
            '1',
            '2023-05-18T12:34:56Z',
            '',
            [],
            ['Resident 1', 'Resident 2']
        )


        render(<PlanetInfo planet={planet}/>);

        expect(screen.getByText(`Climate:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.climate}`)).toBeInTheDocument();
        expect(screen.getByText(`Terrain:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.terrain}`)).toBeInTheDocument();
        expect(screen.getByText(`Gravity:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.gravity}`)).toBeInTheDocument();
        expect(screen.getByText(`Diameter:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.diameter}`)).toBeInTheDocument();
        expect(screen.getByText(`Orbital period:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.orbital_period}`)).toBeInTheDocument();
        expect(screen.getByText(`Rotation period:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.rotation_period}`)).toBeInTheDocument();
        expect(screen.getByText(`Surface water:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.surface_water}`)).toBeInTheDocument();
        expect(screen.getByText(`Population:`)).toBeInTheDocument();
        expect(screen.getByText(`${planet.population}`)).toBeInTheDocument();
        expect(screen.getByText('Created:')).toBeInTheDocument();
        expect(screen.getByText('Edited:')).toBeInTheDocument();
    });

    it('dispatches updatePlanet action and shows success toast on confirm', () => {
        const planet = new Planet('test',
            'Climate',
            '1234',
            'Terrain',
            '56789',
            'Gravity',
            '5678',
            '9012',
            '34',
            '1',
            '2023-05-18T12:34:56Z',
            '',
            [],
            ['Resident 1', 'Resident 2']
        )

        render(<PlanetInfo planet={planet}/>);

        const editButton = screen.getByText('Edit');
        fireEvent.click(editButton);

        const confirmButton = screen.getByText('Confirm');
        fireEvent.click(confirmButton);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(updatePlanet(planet));
    });

    it('does not dispatch updatePlanet action on cancel', () => {
        const planet = new Planet('test',
            'Climate',
            '1234',
            'Terrain',
            '56789',
            'Gravity',
            '5678',
            '9012',
            '34',
            '1',
            '2023-05-18T12:34:56Z',
            '',
            [],
            ['Resident 1', 'Resident 2']
        )

        render(<PlanetInfo planet={planet}/>);

        const editButton = screen.getByText('Edit');
        fireEvent.click(editButton);

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(updatePlanet).not.toHaveBeenCalled();
        expect(mockDispatch).not.toHaveBeenCalled();
    });
});
