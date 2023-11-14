import styles from '../coreValues.module.css';
import Box from './box';
import BoxGrid from './boxGrid';

export default function CoreValues() {

    const values = [{
        front: 'Constant Learning',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: 'This is where the text will go'
    },
    {
        front: 'Ownership',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: 'This is the content for the ownership box'
    },
    {
        front: 'Balance',
        image: 'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: 'This is the content for the balance box'
    }]

    return (
        <section>
            <BoxGrid>
                {values.map((value) => {
                    return <Box image={value.image} front={value.front} back={value.back}></Box>
                })}
            </BoxGrid>
        </section>

    );
}