const STORAGE_KEY = "sop-tech-support-tickets-v3";
const VERSION = "0.2.0";

const SUPPORT_GROUPS = {
  L1: {
    name: "L1一线技术支持组",
    slaHours: 2,
    people: ["张三", "李敏", "周伟"]
  },
  L2: {
    name: "L2二线技术专家组",
    slaHours: 24,
    people: ["陈工", "王工", "刘工"]
  },
  L3: {
    name: "L3高级专家/研发支持组",
    slaHours: 72,
    people: ["赵专家", "孙专家", "研发韩工"]
  }
};

const defaultTickets = [
  ticket({
    id: "TS-202605110001",
    source: "服务站提单",
    title: "PTCan busoff 故障（X6上为PCAN_busoff）",
    station: "上海浦东瑞驰服务站",
    stationCode: "SH-PD-018",
    region: "华东一区",
    reporter: "王磊",
    phone: "138****2961",
    model: "X6",
    year: "2025款 四驱智享版",
    vin: "LJXCLD3A5P0001297",
    mileage: "12000 km",
    warranty: "保内",
    status: "处理中",
    priority: "普通",
    owner: "张三",
    level: "L1",
    levelStartedAt: "2026-05-11 09:20",
    levelDueAt: "2026-05-11 11:20",
    createdAt: "2026-05-11 09:18",
    updatedAt: "2026-05-11 09:20",
    faultTime: "2026-05-11 08:35",
    frequency: "偶发",
    safetyImpact: "待评估",
    symptom: "车辆上电后偶发通信中断，仪表提示异常，服务站读取到 PTCan busoff 相关故障码。",
    checks: "已读取 DTC，已检查网关线束，暂未发现明显外观损伤。",
    request: "请求主机厂提供进一步诊断建议，并确认是否需要更换网关控制器。",
    order400: "400-20260511-0319",
    alarmNo: "ALM-CAN-00981",
    alarmLevel: "二级",
    attachments: ["诊断报告.pdf", "现场照片.jpg", "gateway_log.zip"],
    logs: [
      log("09:20", "张三", "L1受理工单", "已进入 L1 处理，SLA 2小时。", false, [], "待受理", "处理中")
    ]
  }),
  ticket({
    id: "TS-202605110002",
    source: "车联网告警",
    title: "高压电池热管理告警，电池入口温度异常升高",
    station: "杭州城西智行服务站",
    stationCode: "HZ-CX-006",
    region: "华东二区",
    reporter: "系统告警",
    phone: "",
    model: "E9",
    year: "2026款 长续航版",
    vin: "LJXCLD3A9P0002188",
    mileage: "3860 km",
    warranty: "保内",
    status: "待受理",
    priority: "高风险",
    owner: "未分派",
    level: "L1",
    levelStartedAt: "",
    levelDueAt: "",
    createdAt: "2026-05-11 08:10",
    updatedAt: "2026-05-11 08:10",
    faultTime: "2026-05-11 07:54",
    frequency: "持续",
    safetyImpact: "是",
    symptom: "车联网平台连续 3 次上报电池入口温度高于阈值，车辆未进站。",
    checks: "系统自动生成，服务站尚未接车检查。",
    request: "请技术支持判断是否需要紧急联系服务站和客户到店检查。",
    order400: "",
    alarmNo: "ALM-BMS-02017",
    alarmLevel: "一级",
    attachments: ["BMS告警快照.json", "近24小时温度曲线.png"],
    logs: [log("08:10", "车联网平台", "自动建单", "一级告警自动生成技术支持工单，默认进入 L1。", false, ["BMS告警快照.json"], "-", "待受理")]
  }),
  ticket({
    id: "TS-202605100014",
    source: "400工单",
    title: "客户反馈低速转向异响，L1已升级L2",
    station: "南京江宁弘远服务站",
    stationCode: "NJ-JN-012",
    region: "华东一区",
    reporter: "400客服 刘婷",
    phone: "客户隐私保护",
    model: "M5",
    year: "2024款 都市版",
    vin: "LJXCLD3A7P0003321",
    mileage: "28400 km",
    warranty: "保内",
    status: "处理中",
    priority: "紧急",
    owner: "陈工",
    level: "L2",
    levelStartedAt: "2026-05-10 15:40",
    levelDueAt: "2026-05-11 15:40",
    createdAt: "2026-05-10 13:24",
    updatedAt: "2026-05-10 15:40",
    faultTime: "2026-05-10 11:20",
    frequency: "频发",
    safetyImpact: "否",
    symptom: "客户称低速转向和过减速带时前舱有金属敲击声，服务站首次路试未复现。",
    checks: "已检查底盘紧固件和减震器外观，未见异常。",
    request: "请提供进一步排查路径，判断是否需要更换转向机或前减震总成。",
    order400: "400-20260510-0112",
    alarmNo: "",
    alarmLevel: "",
    attachments: ["400通话摘要.txt", "底盘检查照片.zip"],
    stages: {
      L1: stage("李敏", "2026-05-10 13:40", "2026-05-10 15:40", "升级L2", "排查需要底盘异响专家介入"),
      L2: stage("陈工", "2026-05-10 15:40", "2026-05-11 15:40", "处理中", "")
    },
    logs: [
      log("15:40", "李敏", "升级至L2", "L1 无法判断异响源，升级至 L2 二线技术专家组，指派陈工。", false, [], "L1", "L2"),
      log("13:40", "李敏", "L1受理工单", "已从400工单转技术支持处理。", false, [], "待受理", "处理中")
    ]
  }),
  ticket({
    id: "TS-202605090021",
    source: "服务站提单",
    title: "雨天快充口盖偶发无法弹开，已升级L3",
    station: "成都高新众诚服务站",
    stationCode: "CD-GX-009",
    region: "西南一区",
    reporter: "马骁",
    phone: "135****7402",
    model: "S7",
    year: "2025款 Max版",
    vin: "LJXCLD3A2P0005172",
    mileage: "15800 km",
    warranty: "保内",
    status: "处理中",
    priority: "高风险",
    owner: "赵专家",
    level: "L3",
    levelStartedAt: "2026-05-10 10:30",
    levelDueAt: "2026-05-13 10:30",
    createdAt: "2026-05-09 14:20",
    updatedAt: "2026-05-10 10:30",
    faultTime: "2026-05-09 09:30",
    frequency: "频发",
    safetyImpact: "否",
    symptom: "雨天或洗车后，快充口盖按压无响应，车辆干燥后恢复。",
    checks: "服务站检查充电口盖执行器插头有轻微水迹。",
    request: "请确认是否有防水改进件或临时处理方案。",
    order400: "400-20260509-0286",
    alarmNo: "",
    alarmLevel: "",
    eventIds: ["EV-20260510-0002"],
    attachments: ["充电口盖视频.mp4", "插头水迹照片.jpg"],
    stages: {
      L1: stage("周伟", "2026-05-09 14:28", "2026-05-09 16:28", "升级L2", "现场判断涉及零件结构"),
      L2: stage("王工", "2026-05-09 16:40", "2026-05-10 16:40", "升级L3", "疑似设计防水改进问题"),
      L3: stage("赵专家", "2026-05-10 10:30", "2026-05-13 10:30", "处理中", "")
    },
    logs: [
      log("10:30", "王工", "升级至L3", "L2 判断疑似结构设计问题，升级 L3 高级专家处理。", false, [], "L2", "L3"),
      log("16:40", "周伟", "升级至L2", "L1 现场排查无法确认根因，升级 L2。", false, [], "L1", "L2"),
      log("14:28", "周伟", "L1受理工单", "已纳入充电口盖进水问题点跟踪。", false, [], "待受理", "处理中")
    ]
  }),
  ticket({
    id: "TS-202605080018",
    source: "服务站提单",
    title: "仪表偶发黑屏后 5 秒内自行恢复",
    station: "苏州工业园卓越服务站",
    stationCode: "SZ-GY-022",
    region: "华东一区",
    reporter: "赵楠",
    phone: "137****8830",
    model: "X6",
    year: "2025款 两驱悦享版",
    vin: "LJXCLD3A1P0004075",
    mileage: "9200 km",
    warranty: "保内",
    status: "已解决待确认",
    priority: "普通",
    owner: "张三",
    level: "L1",
    levelStartedAt: "2026-05-08 17:05",
    levelDueAt: "2026-05-08 19:05",
    createdAt: "2026-05-08 16:42",
    updatedAt: "2026-05-08 17:30",
    faultTime: "2026-05-08 15:10",
    frequency: "偶发",
    safetyImpact: "否",
    symptom: "客户反馈仪表偶发黑屏，约 5 秒后自行恢复，故障期间中控屏正常。",
    checks: "读取仪表控制器历史低压故障码，蓄电池静态电压正常。",
    request: "确认是否可通过软件刷新处理。",
    order400: "",
    alarmNo: "ALM-ICM-00422",
    alarmLevel: "三级",
    knowledgeIds: ["KB-20260508-0004"],
    attachments: ["仪表黑屏视频.mp4", "DTC截图.png"],
    stages: {
      L1: stage("张三", "2026-05-08 17:05", "2026-05-08 19:05", "已解决", "建议刷新仪表控制器至 ICM_25.04.12")
    },
    logs: [
      log("17:30", "张三", "给出解决方案", "建议刷新仪表控制器至 ICM_25.04.12，并观察 7 天。", true, [], "处理中", "已解决待确认"),
      log("17:05", "张三", "L1受理工单", "已确认软件版本低于当前发布版本。", false, [], "待受理", "处理中")
    ]
  }),
  ticket({
    id: "TS-202605060014",
    source: "400工单",
    title: "远程空调启动失败，App 显示车辆离线",
    station: "合肥滨湖星驰服务站",
    stationCode: "HF-BH-004",
    region: "华中一区",
    reporter: "400客服 梁晨",
    phone: "客户隐私保护",
    model: "E9",
    year: "2025款 标准续航版",
    vin: "LJXCLD3A2P0006120",
    mileage: "6400 km",
    warranty: "保内",
    status: "已关闭",
    priority: "普通",
    owner: "张三",
    level: "L1",
    levelStartedAt: "2026-05-06 09:33",
    levelDueAt: "2026-05-06 11:33",
    createdAt: "2026-05-06 09:18",
    updatedAt: "2026-05-06 16:32",
    faultTime: "2026-05-05 22:06",
    frequency: "偶发",
    safetyImpact: "否",
    symptom: "客户 App 远程空调启动失败，提示车辆离线，次日到站后恢复。",
    checks: "TBOX 在线状态正常，后台查询当晚小区网络覆盖波动。",
    request: "需确认是否属于车辆故障。",
    order400: "400-20260506-0089",
    alarmNo: "",
    alarmLevel: "",
    knowledgeIds: ["KB-20260506-0007"],
    attachments: ["App报错截图.jpg", "TBOX在线记录.csv"],
    satisfaction: {
      status: "已评分",
      channel: "客服代录",
      score: 5,
      solved: "是",
      comment: "客服回访客户确认已解决，客户认可解释。",
      rater: "400客服 梁晨",
      ratedAt: "2026-05-06 17:10"
    },
    stages: {
      L1: stage("张三", "2026-05-06 09:33", "2026-05-06 11:33", "已解决", "后台确认运营商网络波动导致")
    },
    logs: [
      log("17:10", "400客服 梁晨", "满意度评分", "客服代录评分：5星，问题已解决。", true, [], "待评分", "已评分"),
      log("16:32", "张三", "关闭工单", "后台确认运营商网络波动导致，车辆端无故障，已回复服务站。", true, [], "已解决待确认", "已关闭"),
      log("15:10", "张三", "给出解决方案", "建议服务站向客户说明网络覆盖波动原因，并引导客户重试。", true, [], "处理中", "已解决待确认"),
      log("09:33", "张三", "L1受理工单", "已查询 TBOX 在线状态。", false, [], "待受理", "处理中")
    ]
  })
];

let tickets = loadTickets();
let currentTicketId = tickets[0]?.id || null;
let currentUser = "张三";
let activeListTab = "全部";

const els = {
  currentUser: document.querySelector("#current-user"),
  tableBody: document.querySelector("#ticket-table"),
  emptyState: document.querySelector("#empty-state"),
  resultCount: document.querySelector("#result-count"),
  keyword: document.querySelector("#keyword"),
  sourceFilter: document.querySelector("#source-filter"),
  statusFilter: document.querySelector("#status-filter"),
  priorityFilter: document.querySelector("#priority-filter"),
  ownerFilter: document.querySelector("#owner-filter"),
  modelFilter: document.querySelector("#model-filter"),
  alarmFilter: document.querySelector("#alarm-filter"),
  slaFilter: document.querySelector("#sla-filter"),
  filterForm: document.querySelector("#filter-form"),
  resetFilter: document.querySelector("#reset-filter"),
  listTabs: document.querySelector("#list-tabs"),
  listView: document.querySelector("#list-view"),
  detailView: document.querySelector("#detail-view"),
  detailRoot: document.querySelector("#detail-root"),
  detailTab: document.querySelector("#detail-tab"),
  tabs: document.querySelectorAll(".tab"),
  summaryStrip: document.querySelector("#summary-strip"),
  ticketModal: document.querySelector("#ticket-modal"),
  ticketForm: document.querySelector("#ticket-form"),
  ticketModalTitle: document.querySelector("#ticket-modal-title"),
  saveDraft: document.querySelector("#save-draft"),
  actionModal: document.querySelector("#action-modal"),
  actionForm: document.querySelector("#action-form"),
  actionTitle: document.querySelector("#action-modal-title"),
  actionFields: document.querySelector("#action-fields"),
  actionSubmit: document.querySelector("#action-submit"),
  toast: document.querySelector("#toast")
};

function ticket(data) {
  return {
    eventIds: [],
    problemIds: [],
    knowledgeIds: [],
    attachments: [],
    stages: {},
    satisfaction: defaultSatisfaction(data.source),
    logs: [],
    ...data
  };
}

function stage(owner = "", start = "", due = "", result = "未开始", note = "") {
  return { owner, start, due, result, note };
}

function log(time, actor, action, content, visibleToStation, attachments = [], from = "-", to = "-") {
  return { time, actor, action, content, visibleToStation, attachments, from, to };
}

function defaultSatisfaction(source) {
  if (source === "服务站提单") return { status: "未触发", channel: "服务站评分" };
  if (source === "400工单") return { status: "未触发", channel: "客服代录" };
  return { status: "不适用", channel: "不适用" };
}

function loadTickets() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return Array.isArray(saved) && saved.length ? saved : clone(defaultTickets);
  } catch {
    return clone(defaultTickets);
  }
}

function clone(value) {
  return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function shortTime() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function addHours(timeText, hours) {
  const date = timeText ? new Date(timeText.replace(" ", "T")) : new Date();
  date.setHours(date.getHours() + hours);
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function nextTicketId() {
  const today = "20260511";
  const max = tickets.reduce((acc, item) => {
    const match = item.id.match(/TS-\d{8}(\d{4})/);
    return Math.max(acc, match ? Number(match[1]) : 0);
  }, 0);
  return `TS-${today}${String(max + 1).padStart(4, "0")}`;
}

function getTicket(id = currentTicketId) {
  return tickets.find((item) => item.id === id) || tickets[0];
}

function statusClass(value) {
  if (value === "已关闭") return "success";
  if (value === "待补充" || value === "已解决待确认" || value === "草稿") return "warning";
  if (value === "待受理") return "danger";
  return "info";
}

function slaClass(value) {
  if (value === "已超时") return "danger";
  if (value === "即将超时") return "warning";
  if (value === "不计入") return "info";
  return "success";
}

function levelClass(level) {
  return level === "L3" ? "danger" : level === "L2" ? "warning" : "info";
}

function isClosed(item) {
  return item.status === "已关闭";
}

function canEdit(item) {
  return !isClosed(item);
}

function groupOf(item) {
  return SUPPORT_GROUPS[item.level] || SUPPORT_GROUPS.L1;
}

function slaStatus(item) {
  if (item.status === "草稿") return "不计入";
  if (item.status === "已关闭") return "正常";
  if (!item.levelDueAt) return "正常";
  const now = new Date();
  const due = new Date(item.levelDueAt.replace(" ", "T"));
  if (now > due) return "已超时";
  const remainingMs = due - now;
  const thresholdMs = Math.min(groupOf(item).slaHours * 0.25, 2) * 60 * 60 * 1000;
  return remainingMs <= thresholdMs ? "即将超时" : "正常";
}

function slaText(item) {
  if (item.status === "草稿") return "草稿不计入";
  if (!item.levelStartedAt || !item.levelDueAt) return `${item.level} ${groupOf(item).slaHours}小时，待受理后计时`;
  return `${item.level} ${groupOf(item).slaHours}小时 · ${item.levelStartedAt} 至 ${item.levelDueAt}`;
}

function ownerOptions(level, includeUnassigned = false) {
  const options = includeUnassigned ? [`<option>未分派</option>`] : [];
  options.push(...SUPPORT_GROUPS[level].people.map((person) => `<option>${person}</option>`));
  return options.join("");
}

function allPeople() {
  return Object.values(SUPPORT_GROUPS).flatMap((group) => group.people);
}

function filteredTickets() {
  const search = els.keyword.value.trim().toLowerCase();
  return tickets.filter((item) => {
    const searchable = [
      item.id,
      item.title,
      item.vin,
      item.station,
      item.model,
      item.order400,
      item.alarmNo,
      item.symptom,
      item.level,
      item.owner
    ].join(" ").toLowerCase();

    const tabMatched =
      activeListTab === "全部" ||
      (activeListTab === "我的待处理" && item.owner === currentUser && !["已关闭", "已解决待确认"].includes(item.status)) ||
      (activeListTab === "已解决待确认" && item.status === "已解决待确认") ||
      (activeListTab === "已关闭" && item.status === "已关闭") ||
      (activeListTab === "已超时" && slaStatus(item) === "已超时");

    return (
      tabMatched &&
      (!search || searchable.includes(search)) &&
      (!els.sourceFilter.value || item.source === els.sourceFilter.value) &&
      (!els.statusFilter.value || item.status === els.statusFilter.value) &&
      (!els.priorityFilter.value || item.priority === els.priorityFilter.value) &&
      (!els.ownerFilter.value || item.owner === els.ownerFilter.value) &&
      (!els.modelFilter.value || item.model === els.modelFilter.value) &&
      (!els.slaFilter.value || slaStatus(item) === els.slaFilter.value) &&
      (!els.alarmFilter.value || (els.alarmFilter.value === "yes" ? Boolean(item.alarmNo) : !item.alarmNo))
    );
  });
}

function renderListTabs() {
  const tabs = ["全部", "我的待处理", "已解决待确认", "已关闭", "已超时"];
  els.listTabs.innerHTML = tabs.map((tab) => {
    const count = tickets.filter((item) => {
      if (tab === "全部") return true;
      if (tab === "我的待处理") return item.owner === currentUser && !["已关闭", "已解决待确认"].includes(item.status);
      if (tab === "已超时") return slaStatus(item) === "已超时";
      return item.status === tab;
    }).length;
    return `<button class="list-tab ${activeListTab === tab ? "active" : ""}" type="button" data-list-tab="${tab}">${tab}<span>${count}</span></button>`;
  }).join("");
}

function renderSummary() {
  const total = tickets.length;
  const mine = tickets.filter((item) => item.owner === currentUser && !["已关闭", "已解决待确认"].includes(item.status)).length;
  const l1 = tickets.filter((item) => item.level === "L1" && item.status === "处理中").length;
  const l2 = tickets.filter((item) => item.level === "L2" && item.status === "处理中").length;
  const l3 = tickets.filter((item) => item.level === "L3" && item.status === "处理中").length;
  const overdue = tickets.filter((item) => slaStatus(item) === "已超时").length;
  els.summaryStrip.innerHTML = [
    ["全部工单", total, "info"],
    ["我的待处理", mine, "info"],
    ["L1处理中", l1, "info"],
    ["L2处理中", l2, "warning"],
    ["L3处理中", l3, "danger"],
    ["已超时", overdue, "danger"]
  ].map(([label, count, tone]) => `<div class="summary-card ${tone}"><span>${label}</span><strong>${count}</strong></div>`).join("");
}

function renderTickets() {
  renderListTabs();
  renderSummary();
  const rows = filteredTickets();
  els.tableBody.innerHTML = rows.map((item) => {
    const currentSla = slaStatus(item);
    return `
      <tr data-ticket-id="${item.id}" tabindex="0">
        <td>${escapeHtml(item.id)}</td>
        <td>${escapeHtml(item.source)}</td>
        <td title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</td>
        <td>${escapeHtml(item.station)}</td>
        <td>${escapeHtml(item.model)} / ${escapeHtml(item.vin || "-")}</td>
        <td><span class="badge ${levelClass(item.level)}">${escapeHtml(item.level)}</span></td>
        <td><span class="badge ${statusClass(item.status)}">${escapeHtml(item.status)}</span></td>
        <td>${escapeHtml(item.owner)}</td>
        <td><span class="badge ${slaClass(currentSla)}">${escapeHtml(currentSla)}</span></td>
        <td>${escapeHtml(item.satisfaction?.status || "不适用")}</td>
        <td>
          <button class="link-button" type="button" data-row-action="view" data-ticket-id="${item.id}">查看</button>
          ${item.status === "待受理" ? `<button class="link-button" type="button" data-row-action="accept" data-ticket-id="${item.id}">受理</button>` : ""}
        </td>
      </tr>
    `;
  }).join("");
  els.emptyState.style.display = rows.length ? "none" : "block";
  els.resultCount.textContent = `共 ${rows.length} 条`;
}

function renderDetail() {
  const item = getTicket();
  if (!item) {
    els.detailRoot.innerHTML = `<div class="empty-state in-detail">暂无可查看工单</div>`;
    return;
  }
  currentTicketId = item.id;
  els.detailTab.textContent = item.id;
  const currentSla = slaStatus(item);
  els.detailRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <p class="breadcrumb">首页 / 技术支持工单 / ${escapeHtml(item.id)}</p>
        <h1>${escapeHtml(item.title)}</h1>
        <div class="meta-line">
          <span>编号 ${escapeHtml(item.id)}</span>
          <span class="badge ${levelClass(item.level)}">当前环节 ${escapeHtml(item.level)}</span>
          <span class="badge ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
          <span class="badge ${slaClass(currentSla)}">SLA ${escapeHtml(currentSla)}</span>
          <span>${escapeHtml(groupOf(item).name)}</span>
          <span>当前处理人：${escapeHtml(item.owner)}</span>
          <span>当前登录人：${escapeHtml(currentUser)}</span>
        </div>
      </div>
      <div class="heading-actions">
        <button class="button secondary" type="button" data-view="list">返回列表</button>
        <button class="button secondary" type="button" data-op="join-group">加入群</button>
        ${canEdit(item) ? `<button class="button secondary" type="button" data-open-ticket="edit">编辑</button>` : ""}
      </div>
    </div>

    <div class="detail-toolbar">${buildActionButtons(item)}</div>

    <div class="detail-grid">
      ${panel("工单基本信息", dl([
        ["来源", item.source],
        ["工单类型", "技术支持工单"],
        ["状态", item.status],
        ["优先级", item.priority],
        ["创建时间", item.createdAt],
        ["更新时间", item.updatedAt],
        ["当前环节", item.level],
        ["当前处理组", groupOf(item).name],
        ["当前处理人", item.owner],
        ["当前环节SLA", slaText(item)],
        ["升级次数", String(Object.values(item.stages || {}).filter((stageItem) => ["升级L2", "升级L3"].includes(stageItem.result)).length)],
        ["满意度状态", item.satisfaction?.status || "不适用"]
      ]))}

      ${panel("三环处理信息", stageTable(item))}

      ${panel("服务站与车辆信息", dl([
        ["服务站", item.station],
        ["服务站编码", item.stationCode],
        ["区域", item.region],
        ["提单人", `${item.reporter}${item.phone ? " / " + item.phone : ""}`],
        ["VIN", item.vin || "-"],
        ["车型", `${item.model} ${item.year}`],
        ["里程", item.mileage],
        ["保修状态", item.warranty]
      ]))}

      ${panel("故障与诉求信息", `
        <div class="narrative">
          <p><strong>故障发生时间：</strong>${escapeHtml(item.faultTime || "-")}　<strong>频率：</strong>${escapeHtml(item.frequency)}　<strong>安全影响：</strong>${escapeHtml(item.safetyImpact)}</p>
          <p><strong>故障现象：</strong>${escapeHtml(item.symptom)}</p>
          <p><strong>服务站已做检查：</strong>${escapeHtml(item.checks || "暂无")}</p>
          <p><strong>服务站诉求：</strong>${escapeHtml(item.request || "暂无")}</p>
        </div>
        ${fileRow(item.attachments)}
      `, "wide")}

      ${panel("关联信息", dl([
        ["400工单", item.order400 || "暂无"],
        ["车联网告警", item.alarmNo || "暂无"],
        ["告警等级", item.alarmLevel || "无"],
        ["事件单", item.eventIds.join("、") || "暂无"],
        ["问题单", item.problemIds.join("、") || "暂无"],
        ["知识库工单", item.knowledgeIds.join("、") || "暂无"]
      ]))}

      ${panel("满意度评分", satisfactionHtml(item))}
      ${panel("处理记录", timelineHtml(item.logs), "wide")}
    </div>
  `;
}

function buildActionButtons(item) {
  if (item.status === "已关闭") {
    const needsRating = item.satisfaction?.status === "待评分";
    return `${needsRating ? `<button class="button primary" type="button" data-op="satisfaction">满意度评分</button>` : ""}<span class="muted">工单已关闭，仅可查看历史记录。</span>`;
  }
  const buttons = [];
  if (item.status === "草稿") {
    buttons.push(`<button class="button primary" type="button" data-op="submit-draft">提交工单</button>`);
  }
  if (item.status === "待受理") {
    buttons.push(`<button class="button primary" type="button" data-op="accept">受理</button>`);
  }
  if (item.status !== "草稿") {
    buttons.push(`<button class="button secondary" type="button" data-op="assign">分派</button>`);
  }
  if (item.status === "处理中") {
    buttons.push(`<button class="button secondary" type="button" data-op="request-supplement">要求补充</button>`);
    if (item.level === "L1") buttons.push(`<button class="button secondary" type="button" data-op="upgrade-l2">升级至L2</button>`);
    if (item.level === "L2") buttons.push(`<button class="button secondary" type="button" data-op="upgrade-l3">升级至L3</button>`);
    if (item.owner === currentUser) {
      buttons.push(`<button class="button primary" type="button" data-op="resolve">给出解决方案</button>`);
    } else {
      buttons.push(`<button class="button ghost" type="button" data-op="resolve-denied">给出解决方案</button>`);
    }
  }
  if (item.status === "待补充") {
    buttons.push(`<button class="button primary" type="button" data-op="station-supplement">模拟服务站补充</button>`);
  }
  if (item.status === "已解决待确认") {
    buttons.push(`<button class="button secondary" type="button" data-op="reopen">退回继续处理</button>`);
    buttons.push(`<button class="button danger" type="button" data-op="close">确认关闭</button>`);
  }
  return buttons.join("");
}

function panel(title, content, extraClass = "") {
  return `<article class="section-panel ${extraClass}"><button class="section-title" type="button">${escapeHtml(title)}</button>${content}</article>`;
}

function dl(items) {
  return `<dl>${items.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>`;
}

function stageTable(item) {
  const stages = item.stages || {};
  return `
    <div class="stage-table">
      ${["L1", "L2", "L3"].map((level) => {
        const group = SUPPORT_GROUPS[level];
        const current = stages[level] || stage("", "", "", "未开始", "");
        return `
          <div class="stage-row ${item.level === level ? "active" : ""}">
            <strong>${level}</strong>
            <span>${escapeHtml(group.name)}</span>
            <span>处理人：${escapeHtml(current.owner || "-")}</span>
            <span>时效：${group.slaHours}小时</span>
            <span>开始：${escapeHtml(current.start || "-")}</span>
            <span>截止：${escapeHtml(current.due || "-")}</span>
            <span>结果：${escapeHtml(current.result || "未开始")}</span>
            <em>${escapeHtml(current.note || "")}</em>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function satisfactionHtml(item) {
  const s = item.satisfaction || defaultSatisfaction(item.source);
  if (s.status === "不适用") return `<div class="narrative"><p>车联网告警来源关闭后不触发满意度评分。</p></div>`;
  if (s.status === "未触发") {
    return `<div class="narrative"><p><strong>${escapeHtml(s.channel)}</strong>：工单关闭后触发。</p></div>`;
  }
  if (s.status === "待评分") {
    return `<div class="narrative"><p><strong>${escapeHtml(s.channel)}</strong>：工单关闭后待评分。</p></div>`;
  }
  return dl([
    ["评分渠道", s.channel],
    ["评分", `${s.score}星`],
    ["是否解决", s.solved],
    ["评价内容", s.comment],
    ["评分人", s.rater],
    ["评分时间", s.ratedAt]
  ]);
}

function fileRow(files = []) {
  if (!files.length) return `<div class="file-row"><span>暂无附件</span></div>`;
  return `<div class="file-row">${files.map((file) => `<span>${escapeHtml(file)}</span>`).join("")}</div>`;
}

function timelineHtml(logs = []) {
  return `
    <ol class="timeline">
      ${logs.map((item) => `
        <li>
          <time>${escapeHtml(item.time)}</time>
          <strong>${escapeHtml(item.actor)}</strong>
          <span>
            <b>${escapeHtml(item.action)}</b>：${escapeHtml(item.content)}
            <em>${item.visibleToStation ? "服务站可见" : "内部可见"} · ${escapeHtml(item.from)} → ${escapeHtml(item.to)}</em>
            ${item.attachments?.length ? fileRow(item.attachments) : ""}
          </span>
        </li>
      `).join("")}
    </ol>
  `;
}

function showView(name) {
  els.listView.classList.toggle("view-active", name === "list");
  els.detailView.classList.toggle("view-active", name === "detail");
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === name));
  if (name === "detail") renderDetail();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function openModal(node) {
  node.classList.add("open");
}

function closeModal(node) {
  node.classList.remove("open");
}

function openTicketForm(mode) {
  const form = els.ticketForm;
  form.reset();
  const item = mode === "edit" ? getTicket() : null;
  els.ticketModalTitle.textContent = item ? `编辑工单 ${item.id}` : "新建技术支持工单";
  form.elements.id.value = item?.id || "";
  const source = item?.source || "服务站提单";
  form.querySelector(`[name="source"][value="${source}"]`).checked = true;
  form.elements.owner.innerHTML = ownerOptions("L1", true);
  const values = item || {
    title: "PTCan busoff 故障（X6上为PCAN_busoff）",
    priority: "普通",
    owner: SUPPORT_GROUPS.L1.people[0],
    station: "上海浦东瑞驰服务站",
    stationCode: "SH-PD-018",
    region: "华东一区",
    reporter: "王磊",
    phone: "138****2961",
    vin: "LJXCLD3A5P0001297",
    model: "X6",
    year: "2025款 四驱智享版",
    mileage: "12000 km",
    warranty: "保内",
    faultTime: "2026-05-11T09:35",
    frequency: "偶发",
    safetyImpact: "待评估",
    symptom: "车辆上电后偶发通信中断，仪表提示异常。",
    checks: "已读取 DTC，已检查网关线束。",
    request: "请求主机厂提供进一步诊断建议。",
    order400: "400-20260511-0319",
    alarmNo: "ALM-CAN-00981",
    alarmLevel: "二级",
    attachments: ["诊断报告.pdf", "现场照片.jpg"]
  };

  fillForm(form, {
    ...values,
    faultTime: toDateTimeInput(values.faultTime),
    attachments: Array.isArray(values.attachments) ? values.attachments.join(", ") : values.attachments
  });
  openModal(els.ticketModal);
}

function fillForm(form, values) {
  Object.entries(values).forEach(([key, value]) => {
    const field = form.elements[key];
    if (!field || (typeof RadioNodeList !== "undefined" && field instanceof RadioNodeList)) return;
    field.value = value || "";
  });
}

function toDateTimeInput(value = "") {
  if (!value) return "";
  return value.includes("T") ? value : value.replace(" ", "T");
}

function fromTicketForm(statusMode) {
  const form = els.ticketForm;
  const data = Object.fromEntries(new FormData(form).entries());
  const existing = data.id ? getTicket(data.id) : null;
  const assigned = data.owner && data.owner !== "未分派";
  const submittedStatus = assigned ? "处理中" : "待受理";
  const status = statusMode === "draft" ? "草稿" : existing?.status === "草稿" ? submittedStatus : existing?.status || submittedStatus;
  const id = existing?.id || nextTicketId();
  const source = new FormData(form).get("source");
  const attachments = attachmentList(data.attachments);
  const start = existing?.levelStartedAt || (status === "处理中" ? nowText() : "");
  const due = existing?.levelDueAt || (status === "处理中" ? addHours(start, SUPPORT_GROUPS.L1.slaHours) : "");
  const stages = existing?.stages || {};
  if (status === "处理中" && !stages.L1) {
    stages.L1 = stage(data.owner, start, due, "处理中", "默认进入 L1");
  }

  return {
    ...(existing || {}),
    id,
    source,
    title: data.title.trim(),
    priority: data.priority,
    owner: data.owner || "未分派",
    level: existing?.level || "L1",
    station: data.station.trim(),
    stationCode: data.stationCode.trim(),
    region: data.region.trim(),
    reporter: data.reporter.trim(),
    phone: data.phone.trim(),
    vin: data.vin.trim().toUpperCase(),
    model: data.model,
    year: data.year.trim(),
    mileage: data.mileage.trim(),
    warranty: data.warranty,
    status,
    createdAt: existing?.createdAt || nowText(),
    updatedAt: nowText(),
    levelStartedAt: start,
    levelDueAt: due,
    faultTime: data.faultTime ? data.faultTime.replace("T", " ") : "",
    frequency: data.frequency,
    safetyImpact: data.safetyImpact,
    symptom: data.symptom.trim(),
    checks: data.checks.trim(),
    request: data.request.trim(),
    order400: data.order400.trim(),
    alarmNo: data.alarmNo.trim(),
    alarmLevel: data.alarmLevel,
    eventIds: existing?.eventIds || [],
    problemIds: existing?.problemIds || [],
    knowledgeIds: existing?.knowledgeIds || [],
    satisfaction: existing?.satisfaction || defaultSatisfaction(source),
    attachments,
    stages,
    logs: existing?.logs || []
  };
}

function saveTicket(statusMode) {
  const item = fromTicketForm(statusMode);
  if (!item.title) return showToast("请至少填写工单标题");
  if (statusMode !== "draft" && (!item.station || !item.reporter || !item.symptom)) return showToast("请补齐标题、服务站、提单人和故障现象");
  if (item.vin && item.vin.length !== 17) return showToast("VIN 应为 17 位，可为空");
  const duplicate400 = item.order400 ? tickets.find((ticketItem) => ticketItem.id !== item.id && ticketItem.order400 === item.order400) : null;
  if (statusMode !== "draft" && duplicate400) return showToast(`该400工单已关联 ${duplicate400.id}，请先确认是否重复建单`);

  const existingIndex = tickets.findIndex((ticketItem) => ticketItem.id === item.id);
  const action = statusMode === "draft" ? "保存草稿" : existingIndex >= 0 ? "编辑工单" : "提交工单";
  const from = existingIndex >= 0 ? tickets[existingIndex].status : "-";
  const message = statusMode === "draft" ? "草稿已保存，不进入 SLA" : item.status === "处理中" ? "工单已提交，默认进入 L1 处理" : "工单已提交，等待 L1 受理";
  item.logs = [log(shortTime(), currentUser, action, message, false, [], from, item.status), ...item.logs];

  if (existingIndex >= 0) tickets[existingIndex] = item;
  else tickets.unshift(item);
  currentTicketId = item.id;
  persist();
  renderTickets();
  renderDetail();
  closeModal(els.ticketModal);
  showView("detail");
  showToast(message);
}

function openAction(action) {
  const item = getTicket();
  els.actionForm.reset();
  els.actionForm.elements.action.value = action;
  const configs = {
    assign: {
      title: "分派工单",
      submit: "确认分派",
      fields: `
        <label><span>当前环节</span><input value="${item.level} · ${groupOf(item).name}" disabled /></label>
        <label><span>处理人</span><select name="owner">${ownerOptions(item.level)}</select></label>
        <label><span>分派说明</span><textarea name="content">请接手该 ${item.level} 工单，并在当前环节 SLA 内给出处理结论。</textarea></label>
      `
    },
    "request-supplement": {
      title: "要求服务站补充材料",
      submit: "发送补充要求",
      fields: `
        <label><span>补充要求</span><textarea name="content">请上传网关日志、DTC截图、现场线束照片。</textarea></label>
        <label><span>截止时间</span><input name="deadline" value="2026-05-12 18:00" /></label>
      `
    },
    "station-supplement": {
      title: "模拟服务站补充材料",
      submit: "提交补充材料",
      fields: `
        <label><span>补充说明</span><textarea name="content">已补充网关日志、DTC截图和现场照片，请继续诊断。</textarea></label>
        <label><span>附件名，多个用逗号分隔</span><input name="attachments" value="gateway_log.zip, DTC截图.png, 现场线束照片.jpg" /></label>
      `
    },
    "upgrade-l2": {
      title: "升级至L2",
      submit: "确认升级",
      fields: `
        <label><span>L2处理人</span><select name="owner">${ownerOptions("L2")}</select></label>
        <label><span>升级原因</span><textarea name="content">L1 无法独立判断根因，需要 L2 二线技术专家介入。</textarea></label>
      `
    },
    "upgrade-l3": {
      title: "升级至L3",
      submit: "确认升级",
      fields: `
        <label><span>L3处理人</span><select name="owner">${ownerOptions("L3")}</select></label>
        <label><span>升级原因</span><textarea name="content">L2 判断涉及复杂系统或设计问题，需要 L3 高级专家/研发支持介入。</textarea></label>
      `
    },
    resolve: {
      title: "给出解决方案",
      submit: "提交解决方案",
      fields: `
        <label><span>当前处理环节</span><input value="${item.level} · ${item.owner}" disabled /></label>
        <label><span>解决方案</span><textarea name="content">建议按当前诊断路径处理，并完成复测验证。</textarea></label>
        <label><span>附件名，多个用逗号分隔</span><input name="attachments" placeholder="解决方案.pdf" /></label>
      `
    },
    close: {
      title: "确认关闭工单",
      submit: "确认关闭",
      fields: `
        <label><span>关闭原因</span><select name="closeReason"><option>已解决</option><option>重复工单</option><option>无效工单</option><option>转其他流程</option><option>无需处理</option></select></label>
        <label><span>处理结论</span><textarea name="content">已确认解决方案完成验证，关闭工单。</textarea></label>
      `
    },
    satisfaction: {
      title: item.satisfaction?.channel || "满意度评分",
      submit: "提交评分",
      fields: `
        <label><span>评分</span><select name="score"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label>
        <label><span>是否解决问题</span><select name="solved"><option>是</option><option>否</option></select></label>
        <label><span>评价内容</span><textarea name="content">${item.source === "400工单" ? "客服回访客户后代录评分。" : "服务站确认问题已解决。"}</textarea></label>
      `
    }
  };
  const config = configs[action];
  if (!config) return;
  els.actionTitle.textContent = `${config.title} - ${item.id}`;
  els.actionSubmit.textContent = config.submit;
  els.actionFields.innerHTML = config.fields;
  if (action === "assign") els.actionForm.elements.owner.value = item.owner === "未分派" ? SUPPORT_GROUPS[item.level].people[0] : item.owner;
  openModal(els.actionModal);
}

function applyAction(action, formData) {
  const item = getTicket();
  if (!item) return;
  if (isClosed(item) && action !== "satisfaction") return showToast("已关闭工单不可继续处理");
  const beforeStatus = item.status;
  const beforeLevel = item.level;
  let recordAction = "";
  let content = "";
  let visible = false;
  const attachments = attachmentList(formData.get("attachments"));

  if (action === "accept") {
    const start = nowText();
    item.status = "处理中";
    item.level = "L1";
    item.owner = item.owner === "未分派" ? SUPPORT_GROUPS.L1.people[0] : item.owner;
    item.levelStartedAt = start;
    item.levelDueAt = addHours(start, SUPPORT_GROUPS.L1.slaHours);
    item.stages.L1 = stage(item.owner, item.levelStartedAt, item.levelDueAt, "处理中", "L1受理");
    recordAction = "L1受理工单";
    content = "已进入 L1 处理，SLA 2小时。";
  }

  if (action === "submit-draft") {
    item.status = item.owner && item.owner !== "未分派" ? "处理中" : "待受理";
    if (item.status === "处理中") {
      const start = nowText();
      item.level = "L1";
      item.levelStartedAt = start;
      item.levelDueAt = addHours(start, SUPPORT_GROUPS.L1.slaHours);
      item.stages.L1 = stage(item.owner, item.levelStartedAt, item.levelDueAt, "处理中", "草稿提交后进入 L1");
    }
    recordAction = "提交草稿";
    content = item.status === "处理中" ? "草稿已提交，默认进入 L1 处理。" : "草稿已提交，等待 L1 受理。";
  }

  if (action === "assign") {
    const owner = formData.get("owner");
    if (!SUPPORT_GROUPS[item.level].people.includes(owner)) return showToast(`只能选择${groupOf(item).name}人员`);
    item.owner = owner;
    if (item.status === "待受理") {
      const start = nowText();
      item.status = "处理中";
      item.levelStartedAt = start;
      item.levelDueAt = addHours(start, groupOf(item).slaHours);
    }
    item.stages[item.level] = stage(item.owner, item.levelStartedAt, item.levelDueAt, "处理中", "已分派");
    recordAction = "分派工单";
    content = `${formData.get("content") || "已分派工单"} 处理人：${item.owner}`;
  }

  if (action === "request-supplement") {
    item.status = "待补充";
    recordAction = "要求补充材料";
    content = `${formData.get("content") || "请服务站补充材料"} 截止时间：${formData.get("deadline") || "未设置"}`;
    visible = true;
  }

  if (action === "station-supplement") {
    item.status = "处理中";
    recordAction = "服务站补充材料";
    content = formData.get("content") || "服务站已补充材料。";
    visible = true;
    item.attachments = [...new Set([...item.attachments, ...attachments])];
  }

  if (action === "upgrade-l2" || action === "upgrade-l3") {
    const nextLevel = action === "upgrade-l2" ? "L2" : "L3";
    const owner = formData.get("owner");
    if (!SUPPORT_GROUPS[nextLevel].people.includes(owner)) return showToast(`只能选择${SUPPORT_GROUPS[nextLevel].name}人员`);
    const start = nowText();
    item.stages[item.level] = {
      ...(item.stages[item.level] || stage()),
      owner: item.owner,
      start: item.stages[item.level]?.start || item.levelStartedAt,
      due: item.stages[item.level]?.due || item.levelDueAt,
      result: nextLevel === "L2" ? "升级L2" : "升级L3",
      note: formData.get("content") || "升级处理"
    };
    item.level = nextLevel;
    item.owner = owner;
    item.status = "处理中";
    item.levelStartedAt = start;
    item.levelDueAt = addHours(start, SUPPORT_GROUPS[nextLevel].slaHours);
    item.stages[nextLevel] = stage(owner, item.levelStartedAt, item.levelDueAt, "处理中", "");
    recordAction = `升级至${nextLevel}`;
    content = `${formData.get("content") || "升级处理"} 指派：${owner}`;
  }

  if (action === "resolve") {
    if (item.owner !== currentUser) return showToast("只有当前环节处理人可以给出解决方案");
    item.status = "已解决待确认";
    item.stages[item.level] = {
      ...(item.stages[item.level] || stage()),
      owner: item.owner,
      start: item.stages[item.level]?.start || item.levelStartedAt,
      due: item.stages[item.level]?.due || item.levelDueAt,
      result: "已解决",
      note: formData.get("content") || "已给出解决方案"
    };
    recordAction = "给出解决方案";
    content = formData.get("content") || "已给出解决方案。";
    visible = true;
    if (!item.knowledgeIds.length) item.knowledgeIds.push(`KB-${item.id.slice(3, 11)}-${item.id.slice(-4)}`);
  }

  if (action === "reopen") {
    item.status = "处理中";
    if (item.stages[item.level]) item.stages[item.level].result = "处理中";
    recordAction = "退回继续处理";
    content = "处理结论被退回，继续诊断。";
  }

  if (action === "close") {
    const closeReason = formData.get("closeReason") || "已解决";
    item.status = "已关闭";
    item.satisfaction = item.satisfaction || defaultSatisfaction(item.source);
    if (item.satisfaction.status !== "不适用" && item.satisfaction.status !== "已评分") item.satisfaction.status = "待评分";
    recordAction = "关闭工单";
    content = `${closeReason}：${formData.get("content") || "工单已关闭。"}`;
    visible = true;
  }

  if (action === "satisfaction") {
    if (!item.satisfaction || item.satisfaction.status === "不适用") return showToast("该来源不需要满意度评分");
    item.satisfaction = {
      ...item.satisfaction,
      status: "已评分",
      score: Number(formData.get("score")),
      solved: formData.get("solved"),
      comment: formData.get("content") || "",
      rater: item.source === "400工单" ? `${currentUser}（客服代录）` : item.reporter,
      ratedAt: nowText()
    };
    recordAction = "满意度评分";
    content = `${item.satisfaction.channel}：${item.satisfaction.score}星，是否解决：${item.satisfaction.solved}`;
    visible = true;
  }

  item.updatedAt = nowText();
  item.logs = [
    log(shortTime(), action === "station-supplement" ? item.reporter : currentUser, recordAction, content, visible, attachments, beforeStatus === item.status ? beforeLevel : beforeStatus, beforeStatus === item.status ? item.level : item.status),
    ...item.logs
  ];
  persist();
  renderTickets();
  renderDetail();
  showToast(`${recordAction}已完成`);
}

function attachmentList(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function exportData() {
  const data = JSON.stringify(tickets, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tech-support-tickets-v0.2.0.json";
  link.click();
  URL.revokeObjectURL(url);
}

function renderCurrentUserOptions() {
  els.currentUser.innerHTML = allPeople().map((person) => `<option>${person}</option>`).join("");
  els.currentUser.value = currentUser;
}

document.addEventListener("click", (event) => {
  const listTab = event.target.closest("[data-list-tab]");
  if (listTab) {
    activeListTab = listTab.dataset.listTab;
    renderTickets();
    return;
  }

  const viewTarget = event.target.closest("[data-view]");
  if (viewTarget) {
    showView(viewTarget.dataset.view);
    return;
  }

  const openTicketButton = event.target.closest("[data-open-ticket]");
  if (openTicketButton) {
    openTicketForm(openTicketButton.dataset.openTicket);
    return;
  }

  const closeButton = event.target.closest(".close-modal");
  if (closeButton) {
    closeModal(closeButton.closest(".modal-backdrop"));
    return;
  }

  if (event.target.classList.contains("modal-backdrop")) {
    closeModal(event.target);
    return;
  }

  const rowAction = event.target.closest("[data-row-action]");
  if (rowAction) {
    event.stopPropagation();
    currentTicketId = rowAction.dataset.ticketId;
    if (rowAction.dataset.rowAction === "accept") {
      applyAction("accept", new FormData());
      showView("detail");
    } else {
      showView("detail");
    }
    return;
  }

  const row = event.target.closest("tr[data-ticket-id]");
  if (row) {
    currentTicketId = row.dataset.ticketId;
    showView("detail");
    return;
  }

  const op = event.target.closest("[data-op]");
  if (op) {
    const action = op.dataset.op;
    if (["accept", "submit-draft", "reopen"].includes(action)) {
      applyAction(action, new FormData());
    } else if (action === "join-group") {
      showToast("已模拟加入工单协同群");
    } else if (action === "resolve-denied") {
      showToast("只有当前环节处理人可以给出解决方案，请先切换登录人或分派");
    } else {
      openAction(action);
    }
  }
});

els.tableBody.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const row = event.target.closest("tr[data-ticket-id]");
    if (row) {
      currentTicketId = row.dataset.ticketId;
      showView("detail");
    }
  }
});

els.currentUser.addEventListener("change", () => {
  currentUser = els.currentUser.value;
  renderTickets();
  renderDetail();
  showToast(`当前登录人已切换为 ${currentUser}`);
});

els.filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderTickets();
  showToast("筛选条件已应用");
});

els.resetFilter.addEventListener("click", () => {
  window.setTimeout(() => {
    activeListTab = "全部";
    renderTickets();
    showToast("筛选条件已重置");
  }, 0);
});

els.ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveTicket("submit");
});

els.saveDraft.addEventListener("click", () => saveTicket("draft"));

els.actionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.actionForm);
  const action = formData.get("action");
  applyAction(action, formData);
  closeModal(els.actionModal);
});

document.querySelector("#reset-demo-data").addEventListener("click", () => {
  tickets = clone(defaultTickets);
  currentTicketId = tickets[0].id;
  persist();
  renderTickets();
  renderDetail();
  showToast("测试数据已重置为 v0.2.0");
});

document.querySelector("#export-data").addEventListener("click", exportData);

renderCurrentUserOptions();
renderTickets();
renderDetail();
