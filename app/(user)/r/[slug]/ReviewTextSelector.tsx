import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export type ReviewTextSelectorProps = {};

export const ReviewTextSelector = (props: ReviewTextSelectorProps) => {
  return (
    <Tabs value="audio">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="audio">Audio note</TabsTrigger>
        <TabsTrigger value="text">Text</TabsTrigger>
      </TabsList>
      <TabsContent value="audio" className="flex flex-col gap-2 mt-4">
        <AudioRecorderControl onAudioFinish={(blob) => console.log(blob)} />
        <p className="text-sm font-light text-muted-foreground max-w-sm text-center">
          Just record your thoughts and we will convert it to text for you
        </p>
      </TabsContent>
    </Tabs>
  );
};

const AudioRecorderControl = ({
  onAudioFinish,
}: {
  onAudioFinish: (blob: Blob) => void;
}) => {
  const [blob, setBlob] = useState<Blob | null>(null);

  const recorderControls = useAudioRecorder();
  return (
    <div className="flex flex-col items-center gap-2">
      {blob && <audio controls src={URL.createObjectURL(blob)} />}
      <AudioRecorder
        onRecordingComplete={(blob) => {
          onAudioFinish(blob);
          setBlob(blob);
        }}
        recorderControls={recorderControls}
      />
      {recorderControls.isRecording && (
        <Button size="sm" onClick={recorderControls.stopRecording}>
          Stop recording
        </Button>
      )}
      {blob && (
        <Button onClick={recorderControls.stopRecording}>
          Submit
        </Button>
      )}
    </div>
  );
};
