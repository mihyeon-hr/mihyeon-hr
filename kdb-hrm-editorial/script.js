'use strict';

// 공개 배포 전 실제 기여도, 수치, 공개 권한을 최종 확인하세요.
// 프로젝트에 실제 링크를 붙이려면 아래 각 항목의 url 값을 채워 넣으세요.
const projects = {
  meal: {
    category: 'AUTOMATION / PROCESS IMPROVEMENT', title: '식수정산 프로세스 자동화',
    summary: '반복되는 식수정산 업무를 Excel VBA 매크로로 개선했습니다. 기존 약 2시간 걸리던 처리를 검토 단계까지 포함해 약 30분으로 단축했습니다.',
    stats: [['75%', '처리시간 절감'], ['120 → 30분', '검토 포함 소요시간'], ['Excel VBA', '활용 도구']],
    context: '정산 데이터를 반복적으로 취합·처리하는 업무에서 많은 수작업 시간이 발생했습니다. 처리 속도를 높이면서도 결과 검증 과정을 유지해야 했습니다.',
    actions: ['정산 흐름을 단계별로 살피고 반복 처리 구간을 구분했습니다.', 'Excel VBA 매크로로 반복 업무를 자동화했습니다.', '자동 처리 후 담당자가 검토할 수 있는 절차를 유지했습니다.'],
    outcome: '검토를 포함한 업무 소요시간을 약 120분에서 30분으로 단축했습니다. 반복 업무를 줄이고 검증에 집중할 수 있는 시간을 확보했습니다.',
    caution: '실제 사내 정산 데이터·매크로 원본은 공개하지 않았습니다.', url: ''
  },
  subscriptions: {
    category: 'HR DATA / DASHBOARD', title: 'AI 구독 현황 관리 체계 구축',
    summary: '팀별 AI 도구 사용 현황과 비용을 체계적으로 관리하기 위해 데이터 수집 및 대시보드 구성을 개선한 프로젝트입니다.',
    stats: [['18 → 41건', '관리 구독 건수 변화'], ['49 → 220만원', '월 구독 비용 변화'], ['팀·도구·월', '조회 기준']],
    context: 'AI 구독 지원 제도 운영 과정에서 구독 도구와 이용 현황이 다양해지며 통합 관리와 비용 가시화의 필요성이 커졌습니다.',
    actions: ['팀·도구·이용자·월 단위의 관리 항목을 구조화했습니다.', 'Claude Code와 스프레드시트를 활용해 입력과 집계 흐름을 정리했습니다.', '현황을 비교·검토할 수 있는 대시보드를 구성했습니다.'],
    outcome: '증가하는 구독 건수와 비용을 일관된 기준으로 파악할 수 있도록 관리 체계를 마련했습니다. 구독 건수·비용 증가는 운영 규모의 변화이며 프로젝트에 의한 절감 효과를 의미하지 않습니다.',
    caution: '수치는 운영 현황을 나타내며 성과 증가율로 해석하지 않습니다. 내부 이용자 정보는 공개하지 않았습니다.', url: ''
  },
  payroll: {
    category: 'HR OPERATIONS / ACCURACY', title: '급여·인사운영 검증체계',
    summary: '노무법인에서 다수 사업장의 급여·보험을 운영하고, 이후 기업 인사담당자로서 급여·퇴직연금·복리후생 등 HR 운영의 정확성을 관리했습니다.',
    stats: [['약 75개사', '아웃소싱 담당 사업장'], ['약 1,110명', '급여 운영 인원'], ['Full-cycle', '현재 급여 업무']],
    context: '급여 및 인사 운영 업무는 작은 데이터 오류도 근로자와 회사 모두에 영향을 줄 수 있어 검증 기준과 일관된 절차가 중요합니다.',
    actions: ['급여·원천세·4대보험 등 실무 데이터의 정합성을 점검했습니다.', '노무법인 재직 시 반복 업무 체크리스트를 표준화했습니다.', '현 직장에서는 급여·퇴직연금·휴가·복리후생 업무를 연결해 운영하고 있습니다.'],
    outcome: '인사운영의 정확성과 일관성을 높이는 검증 방식을 실무에 적용했습니다. 상세한 내부 데이터와 개별 직원 사례는 공개하지 않았습니다.',
    caution: '75개사·1,110명 수치는 노무법인 재직 당시 관리 규모입니다.', url: ''
  },
  video: {
    category: 'CREATIVE / INTERNAL COMMUNICATION', title: '창립 30주년 팀 홍보영상 단독 제작',
    summary: '사내 복지제도를 재치 있게 알리는 홍보영상을 직접 기획·제작했습니다. AI 영상 도구를 활용했고, 창립기념 행사에서 18개 팀 중 3위를 수상했습니다.',
    stats: [['100%', '기획·제작 기여도'], ['3위 / 18팀', '행사 순위'], ['Best Team Awards', '수상명']],
    context: '사내 복지제도의 메시지를 구성원에게 보다 재미있고 기억에 남는 방식으로 전달하고자 했습니다.',
    actions: ['팀 홍보영상의 콘셉트와 전달 메시지를 직접 기획했습니다.', 'AI 기반 영상 제작 및 편집 도구를 활용해 영상을 단독으로 완성했습니다.', '행사에서 공유할 수 있는 형식으로 콘텐츠를 구성했습니다.'],
    outcome: '완성한 영상으로 창립 30주년 행사에서 전체 18개 팀 중 3위, Best Team Awards를 수상했습니다.',
    caution: '팀 단위로 수상했지만 영상 기획·제작은 개인이 100% 수행했습니다. 영상·상표·음원 공개 권한을 확인한 후 링크를 연결하세요.', url: ''
  },
  space: {
    category: 'EMPLOYEE EXPERIENCE / WORKPLACE', title: '사내 공간·업무환경 개선',
    summary: '사옥 리모델링 및 스마트오피스 관련 환경 개선에 참여해 구성원의 업무 경험을 개선하고, 관련 프로젝트 성과를 인정받았습니다.',
    stats: [['Workplace', '개선 영역'], ['협업', '프로젝트 방식'], ['수상', '프로젝트 성과 인정']],
    context: '공간의 배치와 이용 경험은 구성원의 일하는 방식과 편의에 직접적인 영향을 줍니다.',
    actions: ['전화부스와 탕비 공간 등 업무환경 개선을 검토하고 추진했습니다.', '관련 부서와 공간 활용 및 이용자 관점의 개선 사항을 협의했습니다.', '공간 개선 이후 활용도를 높이는 조직문화 활동으로 관심을 확장했습니다.'],
    outcome: '공간 개선 프로젝트에 참여한 성과를 인정받았습니다. 본 프로젝트는 여러 부서가 함께 수행한 공동 성과입니다.',
    caution: '공간개선 프로젝트는 공동 참여 사례이므로 개인 단독 성과로 표현하지 않았습니다.', url: ''
  },
  advent: {
    category: 'CULTURE / APP PROTOTYPE', title: '어드벤트 캘린더 라운지 이벤트',
    summary: '‘재미있게 일할 수 있는 회사’를 목표로 12월 라운지 이벤트를 기획하고, Claude Code를 활용해 어드벤트 캘린더 앱을 제작했습니다.',
    stats: [['2026.12', '운영 예정'], ['Claude Code', '앱 제작 도구'], ['기획 중', '현재 단계']],
    context: '공간 개선 이후 구성원들이 라운지를 더 즐겁게 이용하고 매일 작은 참여 경험을 얻을 수 있는 활동을 고민했습니다.',
    actions: ['매일 소규모 이벤트가 열리는 어드벤트 캘린더 콘셉트를 기획했습니다.', 'Claude Code로 캘린더 앱을 제작했습니다.', '라운지 공간과 이벤트 콘텐츠의 연계 방식을 구상했습니다.'],
    outcome: '기획과 앱 제작까지 진행한 상태입니다. 실제 행사 운영 결과, 참여율, 만족도 등은 아직 확정되지 않아 기재하지 않았습니다.',
    caution: '진행 중 프로젝트입니다. 행사 종료 이후 실제 수치와 결과를 추가하세요.', url: ''
  }
};

const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const dialog = $('#projectDialog');
const dialogBody = $('#dialogBody');
const closeButton = $('#closeDialog');
let lastOpener = null;

function esc(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function openProject(key, trigger) {
  const p = projects[key];
  if (!p) return;
  lastOpener = trigger;
  const statHtml = p.stats.map(([value,label]) => `<span>${esc(value)}<small>${esc(label)}</small></span>`).join('');
  const actionsHtml = p.actions.map(item => `<li>${esc(item)}</li>`).join('');
  const linkHtml = p.url ? `<p><a class="btn btn-outline" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">프로젝트 결과물 보기 ↗</a></p>` : '';
  dialogBody.innerHTML = `<div class="dialog-kicker">${esc(p.category)}</div><h2 id="dialogTitle" class="dialog-title">${esc(p.title)}</h2><p class="dialog-summary">${esc(p.summary)}</p><div class="dialog-stat">${statHtml}</div><div class="dialog-section"><h4>01 / WHY — 배경과 문제</h4><p>${esc(p.context)}</p></div><div class="dialog-section"><h4>02 / HOW — 실행 과정</h4><ul>${actionsHtml}</ul></div><div class="dialog-section"><h4>03 / RESULT — 결과와 의미</h4><p>${esc(p.outcome)}</p></div>${linkHtml}<div class="dialog-notice">${esc(p.caution)}</div>`;
  if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open','');
  closeButton.focus();
}
function closeProject() { if (dialog.close) dialog.close(); else dialog.removeAttribute('open'); lastOpener?.focus(); }
$$('.project-card').forEach(card => card.addEventListener('click', () => openProject(card.dataset.project, card)));
closeButton.addEventListener('click', closeProject);
dialog.addEventListener('click', event => { if(event.target === dialog) closeProject(); });
dialog.addEventListener('close', () => { lastOpener?.focus(); });

$$('.filter-btn').forEach(button => button.addEventListener('click', () => {
  $$('.filter-btn').forEach(b => { b.classList.toggle('active', b===button); b.setAttribute('aria-pressed',String(b===button)); });
  const selected = button.dataset.filter;
  $$('.project-card').forEach(card => { card.hidden = selected !== 'all' && !card.dataset.category.split(' ').includes(selected); });
}));

const themeToggle = $('#themeToggle');
themeToggle.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', dark ? '다크 모드 전환' : '라이트 모드 전환');
});

const toast = $('#toast');
let toastTimeout;
function showToast(text) { toast.textContent = text; toast.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(()=>toast.classList.remove('show'),2500); }
$('#copyIntro').addEventListener('click', async () => {
  const text = '고미현 | HR 운영의 정확성을 바탕으로 업무 프로세스를 개선하고, 구성원이 체감하는 경험을 설계하는 HR 담당자입니다.';
  try { await navigator.clipboard.writeText(text); showToast('소개 문장을 복사했어요.'); }
  catch { showToast('복사가 제한된 환경입니다. HTTPS에서 다시 시도해 주세요.'); }
});

// 애니메이션은 JS가 활성화되고 관찰자가 지원될 때만 적용
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) {entry.target.classList.add('visible'); observer.unobserve(entry.target);} }), {threshold:0.08,rootMargin:'0px 0px 50px 0px'});
  $$('.reveal').forEach(el=>observer.observe(el));
}
