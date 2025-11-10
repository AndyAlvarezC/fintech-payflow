export const styles = {
  card: `group relative w-full max-w-sm min-h-[220px] sm:min-h-[240px] rounded-2xl p-4 sm:p-6 2xl:mx-8
    backdrop-blur-md bg-slate-800/40 border border-slate-700/50 
    hover:bg-slate-800/60 hover:border-slate-600/70
    transition-all duration-500 ease-out
    shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 
    hover:-translate-y-2 hover:scale-[1.02]
    overflow-hidden`,

  gradients: [
    'absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/20 via-transparent to-slate-900/30 opacity-60',
    'absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 via-transparent to-white/5',
    'absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm',
  ],

  topLine:
    'absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent',

  content: 'relative z-10 flex flex-col h-full justify-between gap-3 sm:gap-4',

  header:
    'flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4',

  iconWrapper: 'relative shrink-0',

  iconBox: `p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/80 
    backdrop-blur-sm border border-slate-600/40 
    group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/25
    transition-all duration-300`,

  icon: 'w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300',

  iconGlow:
    'absolute inset-0 rounded-xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md',

  titleWrapper: 'flex-1 text-center sm:text-left',

  title: `font-bold text-lg sm:text-xl 
    bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent
    group-hover:from-white group-hover:via-cyan-100 group-hover:to-cyan-300
    transition-all duration-300 break-words`,

  textWrapper: 'flex-1 flex items-center justify-center sm:justify-start',

  text: `text-slate-300 text-sm sm:text-base leading-relaxed text-center sm:text-left
    group-hover:text-slate-200 transition-colors duration-300
    line-clamp-3`,

  footer:
    'mt-auto pt-3 sm:pt-4 border-t border-slate-700/50 group-hover:border-slate-600/70 transition-colors duration-300',

  line: `w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full 
    opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300 mx-auto sm:mx-0`,

  dot: `absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-2 h-2 rounded-full bg-cyan-500/40 
    group-hover:bg-cyan-400/60 group-hover:w-3 group-hover:h-3 transition-all duration-300`,
};
