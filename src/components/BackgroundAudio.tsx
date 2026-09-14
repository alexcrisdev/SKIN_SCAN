import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface BackgroundAudioProps {
  src: string;
}

export function BackgroundAudio({ src }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.muted = true;
    audioRef.current = audio;
    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const handleToggle = () => {
    setMuted((m) => !m);
    audioRef.current?.play().catch(() => {});
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={muted ? "Activar sonido de fondo" : "Silenciar sonido de fondo"}
      className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-muted"
    >
      {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
    </button>
  );
}
