"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const HACK_TEXTS = [
  "DECRIPITANDO SISTEMA...",
  "QUEBRANDO FIREWALL ██████░░ 78%",
  "ACESSANDO ARQUIVO PRINCIPAL...",
  "INJETANDO CÓDIGO_ MALWARE.DLL",
  "BY-PASSANDO CRIPTOGRAFIA...",
  "SINCRONIZANDO NEURAL LINK...",
  "CORROMPENDO CHECKS[HK#2A1F]...",
  "CONECTANDO AO NETRUNNER...",
];

const CORE_DUMPS = [
  "// ERR: ┬─┬ ノ( º _ ºノ)",
  "// 0x7f3a: SEGFAULT EM cyber.flux",
  "// WARN: memória cache vazando",
  "// [!!] buffer overflow em porta 7777",
  "// ERRO: banco de dados desencriptado (100MB)",
  "// sistema: 99% corrupto — prosseguindo",
];

const PROGRESS_STEPS = [10, 20, 38, 57, 79, 100];

export default function CyberpunkLoading() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [hackIndex, setHackIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [glitchExtra, setGlitchExtra] = useState("");
  const completedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHackIndex((i) => (i + 1) % HACK_TEXTS.length);
      setProgress((p) => {
        const next = PROGRESS_STEPS.find((s) => s > p) ?? p;
        return next;
      });
    }, 450);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && !completedRef.current) {
      completedRef.current = true;
      const t = setTimeout(() => setDone(true), 1000);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => router.push("/home"), 1500);
    return () => clearTimeout(t);
  }, [done, router]);

  useEffect(() => {
    const glitch = setInterval(() => {
      const pool = CORE_DUMPS[Math.floor(Math.random() * CORE_DUMPS.length)];
      setGlitchExtra(pool);
      const clear = setTimeout(() => setGlitchExtra(""), 150);
      return () => clearTimeout(clear);
    }, 1500);
    return () => clearInterval(glitch);
  }, []);

  return (
    <div className="cyber-container cyber-loading">
      <div className="scanlines" aria-hidden="true" />

      <h1
        className="glitch-text "
        data-text={done ? "ACESSO LIBERADO" : "ACESSANDO PORTFÓLIO"}
      >
        {done ? "ACESSO LIBERADO" : "ACESSANDO PORTFÓLIO"}
      </h1>

      <p className="cyber-subtitle">{"//"} {HACK_TEXTS[hackIndex]}</p>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="boot-log">
        <span className="log-line">
          {done ? "[ 100% ] LOADING COMPLETO" : `[ ${progress}% ] CARREGANDO...`}
        </span>
        <span className="log-line log-faint">
          {done ? "├ acesso: PERMITIDO" : "├ acesso: NEGADO — tentando novamente"}
        </span>
        {glitchExtra && <span className="log-line log-error">{glitchExtra}</span>}
        <span className="log-line log-faint">├ núcleo: {done ? "OK" : "INSTÁVEL"}</span>
        <span className="log-line blinking-cursor">█</span>
      </div>

      <span className="util-error">
        {done ? "CONECTANDO AO NETRUNNER..." : "❌ ERRO: realidade não encontrada ❌"}
      </span>
    </div>
  );
}
