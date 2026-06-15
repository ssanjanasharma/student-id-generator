window.onerror = function (message, source, lineno, colno, error) {
  const errDiv = document.createElement('div');
  errDiv.style.position = 'fixed';
  errDiv.style.top = '0';
  errDiv.style.left = '0';
  errDiv.style.right = '0';
  errDiv.style.background = 'red';
  errDiv.style.color = 'white';
  errDiv.style.padding = '10px';
  errDiv.style.zIndex = '9999';
  errDiv.style.fontFamily = 'monospace';
  errDiv.style.fontSize = '12px';
  errDiv.textContent = `JS Error: ${message} at ${source}:${lineno}:${colno}`;
  document.body.appendChild(errDiv);
  return false;
};

// Grab all form and preview elements once.
const fields = {
  photoInput: document.querySelector('#photoInput'),
  studentName: document.querySelector('#studentName'),
  nickname: document.querySelector('#nickname'),
  birthday: document.querySelector('#birthday'),
  school: document.querySelector('#school'),
  yearLevel: document.querySelector('#yearLevel'),
  mbti: document.querySelector('#mbti'),
  templateSelect: document.querySelector('#templateSelect'),
  themeSelect: document.querySelector('#themeSelect'),
  fontSelect: document.querySelector('#fontSelect'),
  orientationSelect: document.querySelector('#orientationSelect'),
  barcodeToggle: document.querySelector('#barcodeToggle'),
  downloadBtn: document.querySelector('#downloadBtn'),
  languageSelect: document.querySelector('#languageSelect')
};

const translations = {
  en: {
    heroEyebrow: '✦ cute school tools ✦',
    heroTitle: 'Student ID Card Generator',
    heroDescription: 'Create an aesthetic student ID card, preview it live, and download it as a PNG.',
    customizeTitle: 'Customize your ID',
    uploadPhoto: 'Upload profile photo',
    changePhoto: 'Change profile photo',
    labelName: 'Name',
    labelNickname: 'Nickname optional',
    labelBirthday: 'Birthday',
    labelSchool: 'School',
    labelYear: 'Year level',
    labelMbti: 'MBTI Type',
    labelTemplate: 'Template',
    labelTheme: 'Theme',
    labelFont: 'Font',
    labelOrientation: 'Orientation',
    labelShowBarcode: 'Show barcode',
    downloadBtn: "Collect Your I'D Card",
    previewTitle: 'Live preview',
    cardTitle: 'Student ID',
    cardBirthday: 'Birthday',
    cardYear: 'Year',
    cardMbti: 'MBTI',
    cardSchool: 'School',
    cardFooter: 'valid for good vibes',
    nicknamePrefix: 'aka ',
    placeholderName: 'Sawako Kuronuma',
    placeholderNickname: 'Sadako',
    placeholderSchool: 'Kitahoro High School',
    placeholderYear: 'Grade 10',
    defaultName: 'Sawako Kuronuma',
    defaultNickname: 'Sadako',
    defaultSchool: 'Kitahoro High School',
    defaultYear: 'Grade 10',
    footerCreatedBy: 'Created by'
  },
  es: {
    heroEyebrow: '✦ herramientas escolares lindas ✦',
    heroTitle: 'Generador de Estudiante ID',
    heroDescription: 'Crea una tarjeta de estudiante estética, previsualízala en vivo y descárgala en PNG.',
    customizeTitle: 'Personaliza tu ID',
    uploadPhoto: 'Subir foto de perfil',
    changePhoto: 'Cambiar foto de perfil',
    labelName: 'Nombre',
    labelNickname: 'Apodo opcional',
    labelBirthday: 'Cumpleaños',
    labelSchool: 'Colegio',
    labelYear: 'Año de estudios',
    labelMbti: 'Tipo MBTI',
    labelTemplate: 'Plantilla',
    labelTheme: 'Tema',
    labelFont: 'Fuente',
    labelOrientation: 'Orientación',
    labelShowBarcode: 'Mostrar código de barras',
    downloadBtn: 'Descargar Tarjeta',
    previewTitle: 'Vista previa',
    cardTitle: 'Estudiante',
    cardBirthday: 'Cumpleaños',
    cardYear: 'Año',
    cardMbti: 'MBTI',
    cardSchool: 'Colegio',
    cardFooter: 'válido para buenas vibras',
    nicknamePrefix: 'o ',
    placeholderName: 'Sofía García',
    placeholderNickname: 'Sofi',
    placeholderSchool: 'Instituto Kitahoro',
    placeholderYear: 'Décimo Grado',
    defaultName: 'Sofía García',
    defaultNickname: 'Sofi',
    defaultSchool: 'Instituto Kitahoro',
    defaultYear: 'Décimo Grado',
    footerCreatedBy: 'Creado por'
  },
  ja: {
    heroEyebrow: '✦ 可愛いスクールツール ✦',
    heroTitle: '学生証ジェネレーター',
    heroDescription: 'おしゃれな学生証を作成し、ライブでプレビューして、PNGとしてダウンロードできます。',
    customizeTitle: 'IDカードのカスタマイズ',
    uploadPhoto: 'プロフィール写真をアップロード',
    changePhoto: '写真を変更する',
    labelName: '氏名',
    labelNickname: 'ニックネーム（任意）',
    labelBirthday: '生年月日',
    labelSchool: '学校名',
    labelYear: '学年',
    labelMbti: 'MBTIタイプ',
    labelTemplate: 'テンプレート',
    labelTheme: 'テーマ',
    labelFont: 'フォント',
    labelOrientation: '向き',
    labelShowBarcode: 'バーコードを表示',
    downloadBtn: '学生証を受け取る',
    previewTitle: 'ライブプレビュー',
    cardTitle: '学生証',
    cardBirthday: '生年月日',
    cardYear: '学年',
    cardMbti: 'MBTI',
    cardSchool: '学校',
    cardFooter: 'グッドバイブス限定有効',
    nicknamePrefix: '通称: ',
    placeholderName: '黒沼 爽子',
    placeholderNickname: '貞子',
    placeholderSchool: '北幌高校',
    placeholderYear: '1年D組',
    defaultName: '黒沼 爽子',
    defaultNickname: '貞子',
    defaultSchool: '北幌高校',
    defaultYear: '1年D組',
    footerCreatedBy: '作成:'
  },
  ko: {
    heroEyebrow: '✦ 귀여운 학교 도구들 ✦',
    heroTitle: '학생증 생성기',
    heroDescription: '감성적인 학생증을 만들고 실시간으로 미리본 뒤 PNG로 다운로드하세요.',
    customizeTitle: '학생증 커스텀',
    uploadPhoto: '프로필 사진 업로드',
    changePhoto: '사진 변경하기',
    labelName: '이름',
    labelNickname: '닉네임 (선택)',
    labelBirthday: '생년월일',
    labelSchool: '학교명',
    labelYear: '학년',
    labelMbti: 'MBTI 유형',
    labelTemplate: '템플릿',
    labelTheme: '테마',
    labelFont: '폰트',
    labelOrientation: '방향',
    labelShowBarcode: '바코드 표시',
    downloadBtn: '학생증 다운로드',
    previewTitle: '실시간 미리보기',
    cardTitle: '학생증',
    cardBirthday: '생년월일',
    cardYear: '학년',
    cardMbti: 'MBTI',
    cardSchool: '학교',
    cardFooter: '좋은 기운 가득 유효',
    nicknamePrefix: '별명: ',
    placeholderName: '쿠로누마 사와코',
    placeholderNickname: '사다코',
    placeholderSchool: '키타호로 고등학교',
    placeholderYear: '1학년 4반',
    defaultName: '쿠로누마 사와코',
    defaultNickname: '사다코',
    defaultSchool: '키타호로 고등학교',
    defaultYear: '1학년 4반',
    footerCreatedBy: '제작:'
  },
  zh: {
    heroEyebrow: '✦ 可爱校园工具 ✦',
    heroTitle: '学生证在线生成器',
    heroDescription: '在线设计个性唯美的学生证，实时预览效果，并免费下载为 PNG 图片。',
    customizeTitle: '自定义你的学生证',
    uploadPhoto: '上传个人照片',
    changePhoto: '更换个人照片',
    labelName: '姓名',
    labelNickname: '昵称（选填）',
    labelBirthday: '生日',
    labelSchool: '学校',
    labelYear: '年级',
    labelMbti: 'MBTI类型',
    labelTemplate: '模板',
    labelTheme: '主题',
    labelFont: '字体',
    labelOrientation: '方向',
    labelShowBarcode: '显示条形码',
    downloadBtn: '领取你的学生证',
    previewTitle: '实时预览',
    cardTitle: '学生证',
    cardBirthday: '生日',
    cardYear: '年级',
    cardMbti: 'MBTI',
    cardSchool: '学校',
    cardFooter: '好运随行有效',
    nicknamePrefix: '又名 ',
    placeholderName: '黑沼爽子',
    placeholderNickname: '贞子',
    placeholderSchool: '北幌高中',
    placeholderYear: '高一 (4) 班',
    defaultName: '黑沼爽子',
    defaultNickname: '贞子',
    defaultSchool: '北幌高中',
    defaultYear: '高一 (4) 班',
    footerCreatedBy: '创建者:'
  },
  hi: {
    heroEyebrow: '✦ सुंदर स्कूल टूल्स ✦',
    heroTitle: 'छात्र आईडी कार्ड जनरेटर',
    heroDescription: 'एक सुंदर छात्र आईडी कार्ड बनाएं, उसका लाइव प्रीव्यू देखें, और इसे PNG के रूप में डाउनलोड करें।',
    customizeTitle: 'आईडी कार्ड कस्टमाइज़ करें',
    uploadPhoto: 'प्रोफ़ाइल फोटो अपलोड करें',
    changePhoto: 'प्रोफ़ाइल फोटो बदलें',
    labelName: 'नाम',
    labelNickname: 'उपनाम (वैकल्पिक)',
    labelBirthday: 'जन्म तिथि',
    labelSchool: 'विद्यालय',
    labelYear: 'कक्षा / वर्ष',
    labelMbti: 'MBTI प्रकार',
    labelTemplate: 'टेम्पलेट',
    labelTheme: 'थीम',
    labelFont: 'फ़ॉन्ट',
    labelOrientation: 'दिशा',
    labelShowBarcode: 'बारकोड दिखाएं',
    downloadBtn: 'आईडी कार्ड डाउनलोड करें',
    previewTitle: 'लाइव प्रीव्यू',
    cardTitle: 'छात्र पहचान पत्र',
    cardBirthday: 'जन्म तिथि',
    cardYear: 'कक्षा',
    cardMbti: 'MBTI',
    cardSchool: 'विद्यालय',
    cardFooter: 'अच्छे वाइब्स के लिए मान्य',
    nicknamePrefix: 'उर्फ ',
    placeholderName: 'सवाको कुरोनुमा',
    placeholderNickname: 'सदाको',
    placeholderSchool: 'किताहोरो हाई स्कूल',
    placeholderYear: 'कक्षा 10',
    defaultName: 'सवाको कुरोनुमा',
    defaultNickname: 'सदाको',
    defaultSchool: 'किताहोरो हाई स्कूल',
    defaultYear: 'कक्षा 10',
    footerCreatedBy: 'द्वारा निर्मित:'
  }
};

const preview = {
  card: document.querySelector('#idCard'),
  photoPreview: document.querySelector('#photoPreview'),
  photoFrame: document.querySelector('.photo-frame'),
  photoPlaceholder: document.querySelector('#photoPlaceholder'),
  schoolBadge: document.querySelector('#schoolBadge'),
  previewName: document.querySelector('#previewName'),
  nicknameLine: document.querySelector('#nicknameLine'),
  previewBirthday: document.querySelector('#previewBirthday'),
  previewYear: document.querySelector('#previewYear'),
  previewMbti: document.querySelector('#previewMbti'),
  previewSchool: document.querySelector('#previewSchool'),
  barcode: document.querySelector('#barcode')
};

// Friendly placeholder data keeps the preview pretty before users type.
const defaults = {
  name: 'Sawako Kuronuma',
  nickname: 'Sadako',
  birthday: 'Oct 31, 1993',
  school: 'Kitahoro High School',
  year: 'Grade 10',
  mbti: 'INFJ'
};

function formatBirthday(value) {
  if (!value) return defaults.birthday;

  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function generateBarcode(container, text) {
  if (!container) return;
  container.innerHTML = '';

  const linesContainer = document.createElement('div');
  linesContainer.className = 'barcode-lines';

  // Compute a simple hash from the text to make it deterministic but unique
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);

  // Simple LCG pseudo-random generator to yield same barcode for same string
  let seed = hash || 12345;
  function nextRandom() {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  // Helper functions
  function createBar(parent, width) {
    const span = document.createElement('span');
    span.className = 'bar';
    span.style.width = `${width}px`;
    parent.appendChild(span);
  }

  function createSpace(parent, width) {
    const span = document.createElement('span');
    span.style.width = `${width}px`;
    parent.appendChild(span);
  }

  // Draw start guard
  createBar(linesContainer, 2);
  createSpace(linesContainer, 1);
  createBar(linesContainer, 1);
  createSpace(linesContainer, 2);

  // Draw data bars
  for (let i = 0; i < 16; i++) {
    const barWidth = Math.floor(nextRandom() * 3) + 1; // 1, 2, or 3 px
    const spaceWidth = Math.floor(nextRandom() * 2) + 1; // 1 or 2 px
    createBar(linesContainer, barWidth);
    createSpace(linesContainer, spaceWidth);
  }

  // Draw end guard
  createBar(linesContainer, 1);
  createSpace(linesContainer, 2);
  createBar(linesContainer, 2);

  container.appendChild(linesContainer);

  const textElement = document.createElement('div');
  textElement.className = 'barcode-text';
  textElement.textContent = `* ${text} *`;
  container.appendChild(textElement);
}

function updatePreview() {
  const lang = fields.languageSelect.value;
  const t = translations[lang] || translations.en;

  const currentDefaults = {
    name: t.defaultName || 'Sawako Kuronuma',
    nickname: t.defaultNickname || 'Sadako',
    school: t.defaultSchool || 'Kitahoro High School',
    year: t.defaultYear || 'Grade 10',
    mbti: 'INFJ'
  };

  const name = fields.studentName.value.trim() || currentDefaults.name;
  const nickname = fields.nickname.value.trim() || currentDefaults.nickname;
  const school = fields.school.value.trim() || currentDefaults.school;
  const year = fields.yearLevel.value.trim() || currentDefaults.year;
  const mbti = fields.mbti.value || currentDefaults.mbti;

  preview.previewName.textContent = name;
  preview.nicknameLine.textContent = nickname ? `${t.nicknamePrefix}${nickname}` : '';
  preview.previewBirthday.textContent = formatBirthday(fields.birthday.value);
  preview.previewYear.textContent = year;
  preview.previewMbti.textContent = mbti;
  preview.previewSchool.textContent = school;
  preview.schoolBadge.textContent = school;

  // Generate a barcode code based on fields supporting Unicode letters/numbers in different languages
  const cleanName = name.substring(0, 3).toUpperCase().replace(/[^\p{L}\p{N}]/gu, '').trim() || 'SAW';
  const cleanYear = year.replace(/[^\p{L}\p{N}]/gu, '').substring(0, 8).toUpperCase() || '10';
  const barcodeValue = `${mbti}-${cleanName}-${cleanYear}`;
  generateBarcode(preview.barcode, barcodeValue);

  // Update card classes for template, theme, font, and orientation.
  preview.card.className = [
    'id-card',
    fields.orientationSelect.value,
    `theme-${fields.themeSelect.value}`,
    `template-${fields.templateSelect.value}`,
    `font-${fields.fontSelect.value}`
  ].join(' ');

  preview.barcode.classList.toggle('hidden', !fields.barcodeToggle.checked);

  // Auto-adjust scaling on mobile/narrow viewports
  adjustCardScale();
}

function adjustCardScale() {
  const card = preview.card;
  const stage = document.querySelector('.preview-stage');
  if (!card || !stage) return;

  // Reset scale and height to measure raw layout sizes
  card.style.transform = 'none';
  card.style.margin = '0';
  stage.style.height = 'auto';

  // Calculate widths
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  
  // Get padding of stage
  const stageStyle = window.getComputedStyle(stage);
  const paddingLeft = parseFloat(stageStyle.paddingLeft) || 0;
  const paddingRight = parseFloat(stageStyle.paddingRight) || 0;
  const paddingTop = parseFloat(stageStyle.paddingTop) || 0;
  const paddingBottom = parseFloat(stageStyle.paddingBottom) || 0;
  
  const availableWidth = stage.clientWidth - paddingLeft - paddingRight;

  if (cardWidth > availableWidth) {
    const scale = availableWidth / cardWidth;
    card.style.transform = `scale(${scale})`;
    card.style.transformOrigin = 'center center';
    
    // Adjust stage height dynamically to match the visually scaled card height
    const scaledHeight = cardHeight * scale;
    stage.style.height = `${scaledHeight + paddingTop + paddingBottom}px`;
  } else {
    card.style.transform = 'none';
    stage.style.height = 'auto';
  }
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    preview.photoPreview.src = reader.result;
    preview.photoFrame.classList.add('has-image');
    const labelSpan = document.querySelector('#uiUploadPhoto');
    if (labelSpan) {
      const lang = fields.languageSelect.value;
      labelSpan.textContent = translations[lang].changePhoto;
    }
  };

  reader.readAsDataURL(file);
}

async function downloadCard() {
  const card = preview.card;
  
  // Store original scale transform before removing it for capturing
  const originalTransform = card.style.transform;
  const originalTransformOrigin = card.style.transformOrigin;
  
  // Temporarily reset transform scale so html2canvas renders the card at its natural size (un-squeezed)
  card.style.transform = 'none';
  card.style.transformOrigin = 'initial';
  
  try {
    // html2canvas takes a screenshot of the card element and turns it into a PNG.
    const canvas = await html2canvas(card, {
      backgroundColor: null,
      scale: 3,
      useCORS: true,
      logging: false
    });

    const link = document.createElement('a');
    link.download = 'cute-student-id-card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Error rendering card for download:', error);
  } finally {
    // Restore original scale transform styling
    card.style.transform = originalTransform;
    card.style.transformOrigin = originalTransformOrigin;
  }
}

function applyLanguage() {
  const lang = fields.languageSelect.value;
  const t = translations[lang] || translations.en;

  // Translate website title / description (hero section)
  const heroEyebrow = document.querySelector('#uiHeroEyebrow');
  const heroTitle = document.querySelector('#uiHeroTitle');
  const heroDescription = document.querySelector('#uiHeroDescription');
  if (heroEyebrow) heroEyebrow.textContent = t.heroEyebrow;
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroDescription) heroDescription.textContent = t.heroDescription;

  // Update input placeholders
  fields.studentName.placeholder = t.placeholderName || '';
  fields.nickname.placeholder = t.placeholderNickname || '';
  fields.school.placeholder = t.placeholderSchool || '';
  fields.yearLevel.placeholder = t.placeholderYear || '';

  // UI elements
  document.querySelector('#uiCustomizeTitle').textContent = t.customizeTitle;
  document.querySelector('#uiLabelName').textContent = t.labelName;
  document.querySelector('#uiLabelNickname').textContent = t.labelNickname;
  document.querySelector('#uiLabelBirthday').textContent = t.labelBirthday;
  document.querySelector('#uiLabelSchool').textContent = t.labelSchool;
  document.querySelector('#uiLabelYear').textContent = t.labelYear;
  document.querySelector('#uiLabelMbti').textContent = t.labelMbti;
  document.querySelector('#uiLabelTemplate').textContent = t.labelTemplate;
  document.querySelector('#uiLabelTheme').textContent = t.labelTheme;
  document.querySelector('#uiLabelFont').textContent = t.labelFont;
  document.querySelector('#uiLabelOrientation').textContent = t.labelOrientation;
  document.querySelector('#uiLabelShowBarcode').textContent = t.labelShowBarcode;
  document.querySelector('#downloadBtn').textContent = t.downloadBtn;
  document.querySelector('#uiPreviewTitle').textContent = t.previewTitle;

  // Upload Photo label
  const labelSpan = document.querySelector('#uiUploadPhoto');
  if (labelSpan) {
    if (preview.photoFrame.classList.contains('has-image')) {
      labelSpan.textContent = t.changePhoto;
    } else {
      labelSpan.textContent = t.uploadPhoto;
    }
  }

  // Card elements
  document.querySelector('#cardTitle').textContent = t.cardTitle;
  document.querySelector('#cardLabelBirthday').textContent = t.cardBirthday;
  document.querySelector('#cardLabelYear').textContent = t.cardYear;
  document.querySelector('#cardLabelMbti').textContent = t.cardMbti;
  document.querySelector('#cardLabelSchool').textContent = t.cardSchool;
  document.querySelector('#cardFooterText').textContent = t.cardFooter;
  
  // Update webpage footer created by text
  const footerCreatedBy = document.querySelector('#uiFooterCreatedBy');
  if (footerCreatedBy) footerCreatedBy.textContent = t.footerCreatedBy;

  // Refresh preview
  updatePreview();
}

// Listen for live changes on all text/select/checkbox controls.
document.querySelector('#idForm').addEventListener('input', updatePreview);
document.querySelector('#idForm').addEventListener('change', updatePreview);
fields.photoInput.addEventListener('change', handlePhotoUpload);
fields.downloadBtn.addEventListener('click', downloadCard);
fields.languageSelect.addEventListener('change', applyLanguage);
window.addEventListener('resize', adjustCardScale);

// Setup default photo preview onload/onerror detection
preview.photoPreview.onload = () => {
  preview.photoFrame.classList.add('has-image');
};
preview.photoPreview.onerror = () => {
  preview.photoFrame.classList.remove('has-image');
};

// Re-assign src to guarantee onload/onerror triggers correctly after attaching listeners
const defaultSrc = preview.photoPreview.getAttribute('src');
if (defaultSrc) {
  preview.photoPreview.src = defaultSrc;
}

function setupCustomSelects() {
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
    // If already wrapped, skip
    if (select.parentElement.classList.contains('custom-select-wrapper')) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrapper';
    if (select.id === 'languageSelect') {
      wrapper.classList.add('lang-select-wrapper');
    }

    // Insert wrapper before select in DOM
    select.parentNode.insertBefore(wrapper, select);
    // Move select into wrapper
    wrapper.appendChild(select);

    // Create custom trigger box
    const trigger = document.createElement('div');
    trigger.className = 'custom-select-trigger';
    const selectedOption = select.options[select.selectedIndex];
    trigger.textContent = selectedOption ? selectedOption.textContent : '';
    wrapper.appendChild(trigger);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'custom-options-container';

    // Build custom option elements
    function buildCustomOptions() {
      optionsContainer.innerHTML = '';
      Array.from(select.options).forEach(opt => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'custom-option';
        if (opt.selected) {
          optionDiv.classList.add('selected');
        }
        optionDiv.textContent = opt.textContent;
        optionDiv.setAttribute('data-value', opt.value);

        optionDiv.addEventListener('click', (e) => {
          e.stopPropagation();
          select.value = opt.value;

          // Dispatch change & input events to trigger live preview updates
          select.dispatchEvent(new Event('change', { bubbles: true }));
          select.dispatchEvent(new Event('input', { bubbles: true }));

          closeAllDropdowns();
        });

        optionsContainer.appendChild(optionDiv);
      });
    }

    buildCustomOptions();
    wrapper.appendChild(optionsContainer);

    // Toggle dropdown visibility
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        wrapper.classList.add('open');
      }
    });

    // Prevent closing when clicking scrollbar/padding inside options container
    optionsContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Stop synthetic label clicks on hidden native select from bubbling up
    select.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Synchronize custom trigger & selection when native select changes
    select.addEventListener('change', () => {
      const activeOpt = select.options[select.selectedIndex];
      if (activeOpt) {
        trigger.textContent = activeOpt.textContent;
      }

      const customOpts = optionsContainer.querySelectorAll('.custom-option');
      customOpts.forEach(cOpt => {
        if (cOpt.getAttribute('data-value') === select.value) {
          cOpt.classList.add('selected');
        } else {
          cOpt.classList.remove('selected');
        }
      });
    });
  });

  // Close dropdowns if clicked anywhere else (except inside custom select wrapper)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select-wrapper')) {
      closeAllDropdowns();
    }
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.custom-select-wrapper.open').forEach(el => {
    el.classList.remove('open');
  });
}

// Initialize custom select styling
setupCustomSelects();

// Build the first preview immediately.
applyLanguage();
