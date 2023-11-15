import styles from '../coreValues.module.css';
import Box from './box';
import BoxGrid from './boxGrid';

export default function CoreValues() {

    const values = [{
        front: 'Constant Learning',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: "I seek continual progess and growth. I'm always looking for opportunities to learn and apply new skills.",
        gradient: 'linear-gradient(180deg, #954308, #e3952073)'
    },
    {
        front: 'Ownership',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: "I take responsibility for my work and I give each project the attention it deserves. ",
        gradient: 'linear-gradient(180deg, #04042d, rgba(1, 65, 255, 0.4))'
    },
    {
        front: 'Balance',
        image: 'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        back: "I want to live a full and fulfilling life. That means engaging in purposeful work and also pursuing meaningful hobbies.",
        gradient: 'linear-gradient(180deg, #0e5211, rgb(23 86 10 / 35%))'
    }]

    return (
        <section>
            <BoxGrid>
                {values.map((value) => {
                    return <Box gradient={value.gradient} image={value.image} front={value.front} back={value.back}></Box>
                })}
            </BoxGrid>
        </section>

    );
}