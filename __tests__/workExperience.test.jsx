import WorkExperience from "@/app/components/workExperience"
import {screen, render} from "@testing-library/react"

describe('Work Expereience', () => {
    test('software engineer experience', () => {
        render(<WorkExperience />)
        expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    })
})