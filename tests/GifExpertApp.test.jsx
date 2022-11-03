const { render, screen } = require("@testing-library/react")
const { default: GifExpertApp } = require("../src/GifExpertApp")

describe('Pruebas en <GifExpertApp/>', () => {

    test('', () => {

        render(<GifExpertApp/>)
        expect(screen).toMatchSnapshot()



    })


})