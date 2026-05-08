const STORAGE_KEY = "sop-tech-support-tickets-v2";
const CURRENT_USER = "张三";

const defaultTickets = [
  {
    id: "TS-202605080001",
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
    sla: "正常",
    owner: "张三",
    createdAt: "2026-05-08 13:39",
    updatedAt: "2026-05-08 15:20",
    faultTime: "2026-05-08 09:35",
    frequency: "偶发",
    safetyImpact: "待评估",
    symptom: "车辆上电后偶发通信中断，仪表提示异常，服务站读取到 PTCan busoff 相关故障码。",
    checks: "已读取 DTC，已检查网关线束，暂未发现明显外观损伤。",
    request: "请求主机厂提供进一步诊断建议，并确认是否需要更换网关控制器。",
    order400: "400-20260508-0319",
    alarmNo: "ALM-CAN-00981",
    alarmLevel: "二级",
    eventIds: [],
    problemIds: [],
    knowledgeIds: [],
    attachments: ["诊断报告.pdf", "现场照片.jpg", "gateway_log.zip"],
    logs: [
      log("15:20", "服务站王磊", "补充材料", "补充 gateway_log.zip，故障发生前 30 秒网关日志已上传。", true, ["gateway_log.zip"], "待补充", "处理中"),
      log("14:10", "张三", "要求补充材料", "请上传网关日志、DTC截图和现场线束照片。", true, [], "处理中", "待补充"),
      log("13:40", "张三", "受理工单", "已受理并开始诊断。", false, [], "待受理", "处理中")
    ]
  },
  {
    id: "TS-202605080002",
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
    sla: "已超时",
    owner: "未分派",
    createdAt: "2026-05-08 11:10",
    updatedAt: "2026-05-08 11:10",
    faultTime: "2026-05-08 10:54",
    frequency: "持续",
    safetyImpact: "是",
    symptom: "车联网平台连续 3 次上报电池入口温度高于阈值，车辆未进站。",
    checks: "系统自动生成，服务站尚未接车检查。",
    request: "请技术支持判断是否需要紧急联系服务站和客户到店检查。",
    order400: "",
    alarmNo: "ALM-BMS-02017",
    alarmLevel: "一级",
    eventIds: [],
    problemIds: [],
    knowledgeIds: [],
    attachments: ["BMS告警快照.json", "近24小时温度曲线.png"],
    logs: [log("11:10", "车联网平台", "自动建单", "一级告警自动生成技术支持工单。", false, ["BMS告警快照.json"], "-", "待受理")]
  },
  {
    id: "TS-202605080003",
    source: "400工单",
    title: "客户反馈低速转向异响，服务站无法复现",
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
    status: "待补充",
    priority: "紧急",
    sla: "即将超时",
    owner: "李敏",
    createdAt: "2026-05-08 10:24",
    updatedAt: "2026-05-08 11:38",
    faultTime: "2026-05-07 18:20",
    frequency: "频发",
    safetyImpact: "否",
    symptom: "客户称低速转向和过减速带时前舱有金属敲击声，服务站首次路试未复现。",
    checks: "已检查底盘紧固件和减震器外观，未见异常。",
    request: "请提供进一步排查路径，判断是否需要更换转向机或前减震总成。",
    order400: "400-20260508-0112",
    alarmNo: "",
    alarmLevel: "",
    eventIds: [],
    problemIds: [],
    knowledgeIds: [],
    attachments: ["400通话摘要.txt", "底盘检查照片.zip"],
    logs: [
      log("11:38", "李敏", "要求补充材料", "请服务站补充异响录音、举升检查视频和二次路试记录。", true, [], "处理中", "待补充"),
      log("10:40", "李敏", "受理工单", "已从400工单转技术支持处理。", false, [], "待受理", "处理中")
    ]
  },
  {
    id: "TS-202605070021",
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
    sla: "正常",
    owner: "周伟",
    createdAt: "2026-05-07 16:42",
    updatedAt: "2026-05-08 09:30",
    faultTime: "2026-05-07 15:10",
    frequency: "偶发",
    safetyImpact: "否",
    symptom: "客户反馈仪表偶发黑屏，约 5 秒后自行恢复，故障期间中控屏正常。",
    checks: "读取仪表控制器历史低压故障码，蓄电池静态电压正常。",
    request: "确认是否可通过软件刷新处理。",
    order400: "",
    alarmNo: "ALM-ICM-00422",
    alarmLevel: "三级",
    eventIds: [],
    problemIds: [],
    knowledgeIds: ["KB-20260508-0004"],
    attachments: ["仪表黑屏视频.mp4", "DTC截图.png"],
    logs: [
      log("09:30", "周伟", "给出解决方案", "建议刷新仪表控制器至 ICM_25.04.12，并观察 7 天。", true, [], "处理中", "已解决待确认"),
      log("17:05", "周伟", "受理工单", "已确认软件版本低于当前发布版本。", false, [], "待受理", "处理中")
    ]
  },
  {
    id: "TS-202605070018",
    source: "服务站提单",
    title: "雨天快充口盖偶发无法弹开",
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
    priority: "紧急",
    sla: "正常",
    owner: "陈工",
    createdAt: "2026-05-07 14:20",
    updatedAt: "2026-05-08 10:18",
    faultTime: "2026-05-06 21:30",
    frequency: "频发",
    safetyImpact: "否",
    symptom: "雨天或洗车后，快充口盖按压无响应，车辆干燥后恢复。",
    checks: "服务站检查充电口盖执行器插头有轻微水迹。",
    request: "请确认是否有防水改进件或临时处理方案。",
    order400: "400-20260507-0286",
    alarmNo: "",
    alarmLevel: "",
    eventIds: ["EV-20260508-0002"],
    problemIds: [],
    knowledgeIds: [],
    attachments: ["充电口盖视频.mp4", "插头水迹照片.jpg"],
    logs: [
      log("10:18", "陈工", "回复处理意见", "请先清洁插头并涂覆导电保护剂，等待零件工程师确认改进件状态。", true, [], "处理中", "处理中"),
      log("14:28", "陈工", "受理工单", "已纳入充电口盖进水问题点跟踪。", false, [], "待受理", "处理中")
    ]
  },
  {
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
    sla: "正常",
    owner: "张三",
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
    eventIds: [],
    problemIds: [],
    knowledgeIds: ["KB-20260506-0007"],
    attachments: ["App报错截图.jpg", "TBOX在线记录.csv"],
    logs: [
      log("16:32", "张三", "关闭工单", "后台确认运营商网络波动导致，车辆端无故障，已回复服务站。", true, [], "已解决待确认", "已关闭"),
      log("15:10", "张三", "给出解决方案", "建议服务站向客户说明网络覆盖波动原因，并引导客户重试。", true, [], "处理中", "已解决待确认"),
      log("09:33", "张三", "受理工单", "已查询 TBOX 在线状态。", false, [], "待受理", "处理中")
    ]
  }
];

let tickets = loadTickets();
let currentTicketId = tickets[0]?.id || null;

const els = {
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

function log(time, actor, action, content, visibleToStation, attachments = [], from = "-", to = "-") {
  return { time, actor, action, content, visibleToStation, attachments, from, to };
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

function nextTicketId() {
  const today = "20260508";
  const max = tickets.reduce((acc, ticket) => {
    const match = ticket.id.match(/TS-\d{8}(\d{4})/);
    return Math.max(acc, match ? Number(match[1]) : 0);
  }, 0);
  return `TS-${today}${String(max + 1).padStart(4, "0")}`;
}

function getTicket(id = currentTicketId) {
  return tickets.find((ticket) => ticket.id === id) || tickets[0];
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

function isClosed(ticket) {
  return ticket.status === "已关闭";
}

function canEdit(ticket) {
  return !isClosed(ticket);
}

function filteredTickets() {
  const search = els.keyword.value.trim().toLowerCase();
  return tickets.filter((ticket) => {
    const searchable = [
      ticket.id,
      ticket.title,
      ticket.vin,
      ticket.station,
      ticket.model,
      ticket.order400,
      ticket.alarmNo,
      ticket.symptom
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!search || searchable.includes(search)) &&
      (!els.sourceFilter.value || ticket.source === els.sourceFilter.value) &&
      (!els.statusFilter.value || ticket.status === els.statusFilter.value) &&
      (!els.priorityFilter.value || ticket.priority === els.priorityFilter.value) &&
      (!els.ownerFilter.value || ticket.owner === els.ownerFilter.value) &&
      (!els.modelFilter.value || ticket.model === els.modelFilter.value) &&
      (!els.slaFilter.value || ticket.sla === els.slaFilter.value) &&
      (!els.alarmFilter.value ||
        (els.alarmFilter.value === "yes" ? Boolean(ticket.alarmNo) : !ticket.alarmNo))
    );
  });
}

function renderSummary() {
  const total = tickets.length;
  const pending = tickets.filter((ticket) => ticket.status === "待受理").length;
  const processing = tickets.filter((ticket) => ticket.status === "处理中").length;
  const supplement = tickets.filter((ticket) => ticket.status === "待补充").length;
  const overdue = tickets.filter((ticket) => ticket.sla === "已超时").length;
  els.summaryStrip.innerHTML = [
    ["全部工单", total, "info"],
    ["待受理", pending, "danger"],
    ["处理中", processing, "info"],
    ["待补充", supplement, "warning"],
    ["已超时", overdue, "danger"]
  ]
    .map(([label, count, tone]) => `<div class="summary-card ${tone}"><span>${label}</span><strong>${count}</strong></div>`)
    .join("");
}

function renderTickets() {
  const rows = filteredTickets();
  els.tableBody.innerHTML = rows
    .map(
      (ticket) => `
        <tr data-ticket-id="${ticket.id}" tabindex="0">
          <td>${escapeHtml(ticket.id)}</td>
          <td>${escapeHtml(ticket.source)}</td>
          <td title="${escapeHtml(ticket.title)}">${escapeHtml(ticket.title)}</td>
          <td>${escapeHtml(ticket.station)}</td>
          <td>${escapeHtml(ticket.model)} / ${escapeHtml(ticket.vin || "-")}</td>
          <td><span class="badge ${statusClass(ticket.status)}">${escapeHtml(ticket.status)}</span></td>
          <td>${escapeHtml(ticket.priority)}</td>
          <td><span class="badge ${slaClass(ticket.sla)}">${escapeHtml(ticket.sla)}</span></td>
          <td>${escapeHtml(ticket.owner)}</td>
          <td>${escapeHtml(ticket.createdAt)}</td>
          <td>
            <button class="link-button" type="button" data-row-action="view" data-ticket-id="${ticket.id}">查看</button>
            ${ticket.status === "待受理" ? `<button class="link-button" type="button" data-row-action="accept" data-ticket-id="${ticket.id}">受理</button>` : ""}
          </td>
        </tr>
      `
    )
    .join("");
  els.emptyState.style.display = rows.length ? "none" : "block";
  els.resultCount.textContent = `共 ${rows.length} 条`;
  renderSummary();
}

function renderDetail() {
  const ticket = getTicket();
  if (!ticket) {
    els.detailRoot.innerHTML = `<div class="empty-state in-detail">暂无可查看工单</div>`;
    return;
  }

  currentTicketId = ticket.id;
  els.detailTab.textContent = ticket.id;
  const actionButtons = buildActionButtons(ticket);
  els.detailRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <p class="breadcrumb">首页 / 技术支持工单 / ${escapeHtml(ticket.id)}</p>
        <h1>${escapeHtml(ticket.title)}</h1>
        <div class="meta-line">
          <span>编号 ${escapeHtml(ticket.id)}</span>
          <span class="badge ${statusClass(ticket.status)}">${escapeHtml(ticket.status)}</span>
          <span class="badge ${slaClass(ticket.sla)}">SLA ${escapeHtml(ticket.sla)}</span>
          <span>来源：${escapeHtml(ticket.source)}</span>
          <span>当前处理人：${escapeHtml(ticket.owner)}</span>
        </div>
      </div>
      <div class="heading-actions">
        <button class="button secondary" type="button" data-view="list">返回列表</button>
        <button class="button secondary" type="button" data-op="join-group">加入群</button>
        ${canEdit(ticket) ? `<button class="button secondary" type="button" data-open-ticket="edit">编辑</button>` : ""}
      </div>
    </div>

    <div class="detail-toolbar">${actionButtons}</div>

    <div class="detail-grid">
      ${panel("工单基本信息", dl([
        ["来源", ticket.source],
        ["工单类型", "技术支持工单"],
        ["状态", ticket.status],
        ["创建时间", ticket.createdAt],
        ["更新时间", ticket.updatedAt],
        ["当前处理人", ticket.owner],
        ["是否已提取事件", ticket.eventIds.length ? "是" : "否"],
        ["是否已沉淀知识", ticket.knowledgeIds.length ? "是" : "否"]
      ]))}

      ${panel("服务站与车辆信息", dl([
        ["服务站", ticket.station],
        ["服务站编码", ticket.stationCode],
        ["区域", ticket.region],
        ["提单人", `${ticket.reporter}${ticket.phone ? " / " + ticket.phone : ""}`],
        ["VIN", ticket.vin || "-"],
        ["车型", `${ticket.model} ${ticket.year}`],
        ["里程", ticket.mileage],
        ["保修状态", ticket.warranty]
      ]))}

      ${panel("故障与诉求信息", `
        <div class="narrative">
          <p><strong>故障发生时间：</strong>${escapeHtml(ticket.faultTime || "-")}　<strong>频率：</strong>${escapeHtml(ticket.frequency)}　<strong>安全影响：</strong>${escapeHtml(ticket.safetyImpact)}</p>
          <p><strong>故障现象：</strong>${escapeHtml(ticket.symptom)}</p>
          <p><strong>服务站已做检查：</strong>${escapeHtml(ticket.checks || "暂无")}</p>
          <p><strong>服务站诉求：</strong>${escapeHtml(ticket.request || "暂无")}</p>
        </div>
        ${fileRow(ticket.attachments)}
      `, "wide")}

      ${panel("关联信息", dl([
        ["400工单", ticket.order400 || "暂无"],
        ["车联网告警", ticket.alarmNo || "暂无"],
        ["告警等级", ticket.alarmLevel || "无"],
        ["事件单", ticket.eventIds.join("、") || "暂无"],
        ["问题单", ticket.problemIds.join("、") || "暂无"],
        ["知识库工单", ticket.knowledgeIds.join("、") || "暂无"]
      ]))}

      ${panel("处理记录", timelineHtml(ticket.logs))}
    </div>
  `;
}

function buildActionButtons(ticket) {
  if (ticket.status === "已关闭") {
    return `<span class="muted">工单已关闭，仅可查看历史记录。</span>`;
  }
  const buttons = [];
  if (ticket.status === "草稿") {
    buttons.push(`<button class="button primary" type="button" data-op="submit-draft">提交工单</button>`);
  }
  if (ticket.status === "待受理") {
    buttons.push(`<button class="button primary" type="button" data-op="accept">受理</button>`);
  }
  if (ticket.status !== "草稿") {
    buttons.push(`<button class="button secondary" type="button" data-op="assign">分派</button>`);
    buttons.push(`<button class="button secondary" type="button" data-op="reply">回复处理意见</button>`);
  }
  if (ticket.status === "处理中") {
    buttons.push(`<button class="button secondary" type="button" data-op="request-supplement">要求补充</button>`);
    buttons.push(`<button class="button primary" type="button" data-op="resolve">给出解决方案</button>`);
  }
  if (ticket.status === "待补充") {
    buttons.push(`<button class="button primary" type="button" data-op="station-supplement">模拟服务站补充</button>`);
  }
  if (ticket.status === "已解决待确认") {
    buttons.push(`<button class="button secondary" type="button" data-op="reopen">退回处理中</button>`);
  }
  if (ticket.status !== "草稿") {
    buttons.push(`<button class="button danger" type="button" data-op="close">关闭工单</button>`);
  }
  return buttons.join("");
}

function panel(title, content, extraClass = "") {
  return `
    <article class="section-panel ${extraClass}">
      <button class="section-title" type="button">${escapeHtml(title)}</button>
      ${content}
    </article>
  `;
}

function dl(items) {
  return `
    <dl>
      ${items.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}
    </dl>
  `;
}

function fileRow(files = []) {
  if (!files.length) return `<div class="file-row"><span>暂无附件</span></div>`;
  return `<div class="file-row">${files.map((file) => `<span>${escapeHtml(file)}</span>`).join("")}</div>`;
}

function timelineHtml(logs = []) {
  return `
    <ol class="timeline">
      ${logs
        .map(
          (item) => `
            <li>
              <time>${escapeHtml(item.time)}</time>
              <strong>${escapeHtml(item.actor)}</strong>
              <span>
                <b>${escapeHtml(item.action)}</b>：${escapeHtml(item.content)}
                <em>${item.visibleToStation ? "服务站可见" : "内部可见"} · ${escapeHtml(item.from)} → ${escapeHtml(item.to)}</em>
                ${item.attachments?.length ? fileRow(item.attachments) : ""}
              </span>
            </li>
          `
        )
        .join("")}
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
  const ticket = mode === "edit" ? getTicket() : null;
  els.ticketModalTitle.textContent = ticket ? `编辑工单 ${ticket.id}` : "新建技术支持工单";
  form.elements.id.value = ticket?.id || "";
  const source = ticket?.source || "服务站提单";
  form.querySelector(`[name="source"][value="${source}"]`).checked = true;

  const values = ticket || {
    title: "PTCan busoff 故障（X6上为PCAN_busoff）",
    priority: "普通",
    owner: "张三",
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
    faultTime: "2026-05-08T09:35",
    frequency: "偶发",
    safetyImpact: "待评估",
    symptom: "车辆上电后偶发通信中断，仪表提示异常，服务站读取到 PTCan busoff 相关故障码。",
    checks: "已读取 DTC，已检查网关线束，暂未发现明显外观损伤。",
    request: "请求主机厂提供进一步诊断建议。",
    order400: "400-20260508-0319",
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
  const attachments = data.attachments
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    ...(existing || {}),
    id,
    source,
    title: data.title.trim(),
    priority: data.priority,
    owner: data.owner || "未分派",
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
    sla: status === "草稿" ? "不计入" : existing?.sla || "正常",
    createdAt: existing?.createdAt || nowText(),
    updatedAt: nowText(),
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
    attachments,
    logs: existing?.logs || []
  };
}

function saveTicket(statusMode) {
  const ticket = fromTicketForm(statusMode);
  if (!ticket.title) {
    showToast("请至少填写工单标题");
    return;
  }
  if (statusMode !== "draft" && (!ticket.station || !ticket.reporter || !ticket.symptom)) {
    showToast("请补齐标题、服务站、提单人和故障现象");
    return;
  }
  if (ticket.vin && ticket.vin.length !== 17) {
    showToast("VIN 应为 17 位，可为空");
    return;
  }
  const duplicate400 = ticket.order400
    ? tickets.find((item) => item.id !== ticket.id && item.order400 === ticket.order400)
    : null;
  if (statusMode !== "draft" && duplicate400) {
    showToast(`该400工单已关联 ${duplicate400.id}，请先确认是否重复建单`);
    return;
  }
  const existingIndex = tickets.findIndex((item) => item.id === ticket.id);
  const action = statusMode === "draft" ? "保存草稿" : existingIndex >= 0 ? "编辑工单" : "提交工单";
  const from = existingIndex >= 0 ? tickets[existingIndex].status : "-";
  const to = ticket.status;
  const message =
    statusMode === "draft"
      ? "草稿已保存，不进入 SLA"
      : ticket.status === "处理中"
        ? "工单已提交并因指定处理人直接进入处理中"
        : "工单已提交，等待受理";

  ticket.logs = [
    log(shortTime(), CURRENT_USER, action, message, false, [], from, to),
    ...ticket.logs
  ];

  if (existingIndex >= 0) tickets[existingIndex] = ticket;
  else tickets.unshift(ticket);
  currentTicketId = ticket.id;
  persist();
  renderTickets();
  renderDetail();
  closeModal(els.ticketModal);
  showView("detail");
  showToast(message);
}

function openAction(action) {
  const ticket = getTicket();
  els.actionForm.reset();
  els.actionForm.elements.action.value = action;
  const configs = {
    assign: {
      title: "分派工单",
      submit: "确认分派",
      fields: `
        <label><span>处理人</span><select name="owner"><option>张三</option><option>李敏</option><option>周伟</option><option>陈工</option></select></label>
        <label><span>分派说明</span><textarea name="content">请接手该工单，并在 SLA 到期前给出处理意见。</textarea></label>
      `
    },
    reply: {
      title: "回复处理意见",
      submit: "提交处理记录",
      fields: `
        <label><span>处理动作</span><select name="recordAction"><option>回复处理意见</option><option>内部备注</option><option>诊断建议</option></select></label>
        <fieldset class="radio-group"><legend>对服务站可见</legend><label><input type="radio" name="visible" value="yes" checked /> 是</label><label><input type="radio" name="visible" value="no" /> 否</label></fieldset>
        <label><span>处理内容</span><textarea name="content">请服务站补充网关日志和DTC截图。</textarea></label>
        <label><span>附件名，多个用逗号分隔</span><input name="attachments" placeholder="诊断指导.pdf" /></label>
      `
    },
    "request-supplement": {
      title: "要求服务站补充材料",
      submit: "发送补充要求",
      fields: `
        <label><span>补充要求</span><textarea name="content">请上传网关日志、DTC截图、现场线束照片。</textarea></label>
        <label><span>截止时间</span><input name="deadline" value="2026-05-09 18:00" /></label>
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
    resolve: {
      title: "给出解决方案",
      submit: "提交解决方案",
      fields: `
        <label><span>解决方案</span><textarea name="content">建议刷新网关控制器至 GW_25.05.01，刷新后清除 DTC 并路试 20 分钟。</textarea></label>
        <fieldset class="radio-group"><legend>是否建议沉淀知识</legend><label><input type="radio" name="knowledge" value="yes" checked /> 是</label><label><input type="radio" name="knowledge" value="no" /> 否</label></fieldset>
      `
    },
    close: {
      title: "关闭工单",
      submit: "确认关闭",
      fields: `
        <label><span>关闭原因</span><select name="closeReason"><option>已解决</option><option>重复工单</option><option>无效工单</option><option>转其他流程</option><option>无需处理</option></select></label>
        <label><span>处理结论</span><textarea name="content">已确认按指导方案完成处理，建议关闭。</textarea></label>
        <fieldset class="radio-group"><legend>是否建议沉淀知识</legend><label><input type="radio" name="knowledge" value="yes" /> 是</label><label><input type="radio" name="knowledge" value="no" checked /> 否</label></fieldset>
      `
    }
  };

  const config = configs[action];
  if (!config) return;
  els.actionTitle.textContent = `${config.title} - ${ticket.id}`;
  els.actionSubmit.textContent = config.submit;
  els.actionFields.innerHTML = config.fields;
  if (action === "assign") els.actionForm.elements.owner.value = ticket.owner === "未分派" ? CURRENT_USER : ticket.owner;
  openModal(els.actionModal);
}

function applyAction(action, formData) {
  const ticket = getTicket();
  if (!ticket || isClosed(ticket)) {
    showToast("已关闭工单不可继续处理");
    return;
  }
  const before = ticket.status;
  let recordAction = "";
  let content = "";
  let visible = false;
  let attachments = attachmentList(formData.get("attachments"));

  if (action === "accept") {
    ticket.status = "处理中";
    ticket.owner = ticket.owner === "未分派" ? CURRENT_USER : ticket.owner;
    ticket.sla = ticket.sla === "已超时" ? "即将超时" : ticket.sla;
    recordAction = "受理工单";
    content = "已受理并开始处理。";
  }

  if (action === "submit-draft") {
    ticket.status = ticket.owner && ticket.owner !== "未分派" ? "处理中" : "待受理";
    ticket.sla = "正常";
    recordAction = "提交草稿";
    content = ticket.status === "处理中" ? "草稿已提交，因指定处理人直接进入处理中。" : "草稿已提交，等待受理。";
  }

  if (action === "assign") {
    ticket.owner = formData.get("owner");
    if (ticket.status === "待受理") ticket.status = "处理中";
    recordAction = "分派工单";
    content = `${formData.get("content") || "已分派工单"} 处理人：${ticket.owner}`;
  }

  if (action === "reply") {
    recordAction = formData.get("recordAction") || "回复处理意见";
    content = formData.get("content") || "提交处理意见。";
    visible = formData.get("visible") === "yes";
  }

  if (action === "request-supplement") {
    ticket.status = "待补充";
    recordAction = "要求补充材料";
    content = `${formData.get("content") || "请服务站补充材料"} 截止时间：${formData.get("deadline") || "未设置"}`;
    visible = true;
  }

  if (action === "station-supplement") {
    ticket.status = "处理中";
    recordAction = "服务站补充材料";
    content = formData.get("content") || "服务站已补充材料。";
    visible = true;
    ticket.attachments = [...new Set([...ticket.attachments, ...attachments])];
  }

  if (action === "resolve") {
    ticket.status = "已解决待确认";
    recordAction = "给出解决方案";
    content = formData.get("content") || "已给出解决方案。";
    visible = true;
    if (formData.get("knowledge") === "yes" && !ticket.knowledgeIds.length) {
      ticket.knowledgeIds.push(`KB-${ticket.id.slice(3, 11)}-${ticket.id.slice(-4)}`);
    }
  }

  if (action === "reopen") {
    ticket.status = "处理中";
    recordAction = "退回处理中";
    content = "处理结论被退回，继续诊断。";
  }

  if (action === "close") {
    const closeReason = formData.get("closeReason") || "已解决";
    ticket.status = "已关闭";
    ticket.sla = "正常";
    recordAction = "关闭工单";
    content = `${closeReason}：${formData.get("content") || "工单已关闭。"}`;
    visible = true;
    if (formData.get("knowledge") === "yes" && !ticket.knowledgeIds.length) {
      ticket.knowledgeIds.push(`KB-${ticket.id.slice(3, 11)}-${ticket.id.slice(-4)}`);
    }
  }

  ticket.updatedAt = nowText();
  ticket.logs = [
    log(shortTime(), action === "station-supplement" ? ticket.reporter : CURRENT_USER, recordAction, content, visible, attachments, before, ticket.status),
    ...ticket.logs
  ];
  persist();
  renderTickets();
  renderDetail();
  showToast(`${recordAction}已完成`);
}

function attachmentList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function exportData() {
  const data = JSON.stringify(tickets, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tech-support-tickets.json";
  link.click();
  URL.revokeObjectURL(url);
}

document.addEventListener("click", (event) => {
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

els.filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderTickets();
  showToast("筛选条件已应用");
});

els.resetFilter.addEventListener("click", () => {
  window.setTimeout(() => {
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
  showToast("测试数据已重置");
});

document.querySelector("#export-data").addEventListener("click", exportData);

renderTickets();
renderDetail();
