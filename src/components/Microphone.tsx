import { useEffect } from 'react';
import { useVoiceVisualizer, VoiceVisualizer } from 'react-voice-visualizer';

export default function Microphone() {
    const recorderControls = useVoiceVisualizer();
    const {
        // ... (Extracted controls and states, if necessary)
        recordedBlob,
        error,
        audioRef,
    } = recorderControls;

    // Get the recorded audio blob
    useEffect(() => {
        if (!recordedBlob) return;

        console.log(recordedBlob);
    }, [recordedBlob, error]);

    // Get the error when it occurs
    useEffect(() => {
        if (!error) return;

        console.log(error);
    }, [error]);

    return (
        <VoiceVisualizer backgroundColor={"black"} controls={recorderControls} ref={audioRef}/>
    );
};
