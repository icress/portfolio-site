import Particles from 'react-tsparticles';
import particleConfig from './particleConfig';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground() {

    const initParticles = useCallback(async (engine) => {
        await loadSlim(engine)
    }, []) 

    return (
        <Particles init={initParticles} options={particleConfig} />
    )
}