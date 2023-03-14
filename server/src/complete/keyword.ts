import { CompletionItemKind } from "vscode-languageserver/node";
export const keywords = [
  {
    label: "HIGH",
    detail: "最高价",
    documentation: `
    返回该周期最高价.
    用法:
    HIGH
    `,
  },
  {
    label: "H",
    detail: "最高价",
    documentation: `
    返回该周期最高价.
    用法:
    同HIGH
    `,
  },
  {
    label: "LOW",
    detail: "最低价",
    documentation: `
    返回该周期最低价.
    用法:
    LOW
    `,
  },
  {
    label: "L",
    detail: "最低价",
    documentation: `
    返回该周期最低价.
    用法:
    同LOW
    `,
  },
  {
    label: "CLOSE",
    detail: "收盘价",
    documentation: `
    返回该周期收盘价.
    用法:
    CLOSE
    `,
  },
  {
    label: "C",
    detail: "收盘价",
    documentation: `
    返回该周期收盘价.
    用法:
    同CLOSE
    `,
  },
  {
    label: "VOL",
    detail: "成交量（手）",
    documentation: `
    返回该周期成交量.
    用法:
    VOL
    `,
  },
  {
    label: "V",
    detail: "成交量（手）",
    documentation: `
    返回该周期成交量.
    用法:
    同VOL
    `,
  },
  {
    label: "OPEN",
    detail: "开盘价",
    documentation: `
    返回该周期开盘价.
    用法:
    OPEN
    `,
  },
  {
    label: "O",
    detail: "开盘价",
    documentation: `
    返回该周期开盘价.
    用法:
    同OPEN
    `,
  },
  {
    label: "ADVANCE",
    detail: "上涨家数",
    documentation: `
    返回该周期上涨家数.
    用法:
    ADVANCE(本函数仅对沪深指数有效)
    `,
  },
  {
    label: "DECLINE",
    detail: "下跌家数",
    documentation: `
    返回该周期下跌家数.
    用法:
    DECLINE(本函数仅对沪深指数有效)
    `,
  },
  {
    label: "AMOUNT",
    detail: "成交额（元）",
    documentation: `
    返回该周期成交额.期货和期权无成交金额,返回持仓量
    用法:
    AMOUNT
    `,
  },
  {
    label: "AMO",
    detail: "成交额（元）",
    documentation: `
    返回该周期成交额.期货和期权无成交金额,返回持仓量
    用法:
    AMOUNT
    `,
  },
  {
    label: "ZSTJJ",
    detail: "分时图均价",
    documentation: `
    返回该周期的分时图均价线,对于分时图周期指标有效.
    用法:
    ZSTJJ
    `,
  },
  {
    label: "VOLINSTK",
    detail: "持仓量",
    documentation: `
    返回该周期持仓量,对于期货和期权有意义.
    用法:
    VOLINSTK
    `,
  },
  {
    label: "QHJSJ",
    detail: "结算价",
    documentation: `
    返回该周期结算价,对于期货和期权有意义.
    用法:
    QHJSJ
    `,
  },
  {
    label: "HKSHORTVOL",
    detail: "抛空量",
    documentation: `
    返回该周期抛空量,对于港股有意义.
    用法:
    HKSHORTVOL
    `,
  },
  {
    label: "DHIGH",
    detail: "不定周期最高价（未来函数）",
    documentation: `
    返回该不定周期最高价,属于未来函数.
    用法:
    DHIGH
    `,
  },
  {
    label: "DOPEN",
    detail: "不定周期开盘价（未来函数）",
    documentation: `
    返回该不定周期开盘价,属于未来函数.
    用法:
    DOPEN
    `,
  },
  {
    label: "DLOW",
    detail: "不定周期最低价（未来函数）",
    documentation: `
    返回该不定周期最低价,属于未来函数.
    用法:
    DLOW
    `,
  },
  {
    label: "DCLOSE",
    detail: "不定周期收盘价（未来函数）",
    documentation: `
    返回该不定周期收盘价,属于未来函数.
    用法:
    DCLOSE
    `,
  },
  {
    label: "DVOL",
    detail: "不定周期成交量（未来函数）",
    documentation: `
    返回该不定周期成交量,属于未来函数.
    用法:
    DVOL
    `,
  },
  {
    label: "PERIOD",
    detail: "周期类型",
    documentation: `
    取得周期类型.
    结果从0到13,依次分别是1/5/15/30/60分钟,日/周/月,多分钟,多日/季/年,5秒线/多秒线,13以上为自定义周期
    `,
  },
  {
    label: "DATE",
    detail: "日期",
    documentation: `
    取得该周期从1900以来的的年月日.
    用法:
    DATE
    例如函数返回1000101,表示2000年1月1日,DATE+19000000后才是真正的日期值,公式内容中请不要直接写8位长的日期数字
    `,
  },
  {
    label: "TIME",
    detail: "时间（时分）",
    documentation: `
    取得该周期的时分,适用于日线以下周期
    用法: 
    TIME
    函数返回有效值范围为(0000-2359)
    `,
  },
  {
    label: "TIME2",
    detail: "时间（时分秒）",
    documentation: `
    取得该周期的时分秒,适用于日线以下周期.
    用法: 
    TIME2
    函数返回有效值范围为(000000-235959)
    `,
  },
  {
    label: "YEAR",
    detail: "年份",
    documentation: `
    取得该周期的年份.
    用法:
    YEAR
    注:YEAR关键字也可用于跨周期年线引用
    `,
  },
  {
    label: "MONTH",
    detail: "月份",
    documentation: `
    取得该周期的月份.
    用法:
    MONTH
    函数返回有效值范围为(1-12)
    注:MONTH关键字也可用于跨周期月线引用
    `,
  },
  {
    label: "WEEKOFYEAR",
    detail: "年内星期",
    documentation: `
    取得该周是年内第几个周.
    用法:
    WEEKOFYEAR
    `,
  },
  {
    label: "WEEKDAY",
    detail: "星期",
    documentation: `
    取得该周期的星期数.
    用法:
    WEEKDAY
    函数返回有效值范围为(1,2,3,4,5,6,0)
    `,
  },
  {
    label: "DAYSTOTODAY",
    detail: "离今天的天数",
    documentation: `
    取得该周期的日期离今天的天数.
    用法:
    DAYSTOTODAY
    `,
  },
  {
    label: "DAY",
    detail: "日",
    documentation: `
    取得该周期的日期.
    用法:
    DAY
    函数返回有效值范围为(1-31)
    注:DAY关键字也可用于跨周期日线引用
    `,
  },
  {
    label: "HOUR",
    detail: "小时",
    documentation: `
    取得该周期的小时数.
    用法:
    HOUR
    函数返回有效值范围为(0-23),对于日线及更长的分析周期值为0
    `,
  },
  {
    label: "MINUTE",
    detail: "分钟",
    documentation: `
    取得该周期的分钟数.
    用法:
    MINUTE
    函数返回有效值范围为(0-59),对于日线及更长的分析周期值为0
    `,
  },
  {
    label: "FROMOPEN",
    detail: "当前离开盘分钟数",
    documentation: `
    求该品种当前时刻已开盘有多长分钟.
    用法:
    FROMOPEN
    FROMOPEN.返回当前时刻距开盘有多长时间(开市期间的相对时间),单位为分钟.
    `,
  },
  {
    label: "TOTALFZNUM",
    detail: "总分钟数",
    documentation: `
    求该品种的每天的总交易分钟数.
    用法:
    TOTALFZNUM
    TOTALFZNUM.返回当前品种的每天的总交易分钟数,单位为分钟.
    `,
  },
  {
    label: "DATETODAY",
    detail: "转换天数",
    documentation: `
    指定日期到1990.12.19的天数.
    用法:
    DATETODAY(date)
    DATETODAY(date).返回date到1990.12.19的天数.有效日期为(901219-1341231)
    例如:
    DATETODAY(901219)返回0.
    `,
  },
  {
    label: "DAYTODATE",
    detail: "转换日期",
    documentation: `
    求1990.12.19后第若干天的日期.
    用法:
    DAYTODATE(N)
    DAYTODATE(N).返回1990.12.19后第N天的日期.有效天数为(0-20000)
    例如:
    DAYTODATE(0)返回901219.
    `,
  },
  {
    label: "TIMETOSEC",
    detail: "当日秒数",
    documentation: `
    求指定时刻距0时有多长时间.
    用法:
    TIMETOSEC(time)
    TIMETOSEC(time).返回time时刻距0时有多长时间,单位为秒.有效时间为(0-235959)
    例如:
    TIMETOSEC(93000)返回34200.
    `,
  },
  {
    label: "SECTOTIME",
    detail: "转换时间",
    documentation: `
    求0时后若干秒是什么时间.
    用法:
    SECTOTIME(N)
    SECTOTIME(N).返回0时后N秒是什么时间.有效秒数为(0-86399)
    例如:
    SECTOTIME(34200)返回93000.
    `,
  },
  {
    label: "MACHINEDATE",
    detail: "当前系统的日期",
    documentation: `
    取得当前客户端机器从1900以来的的年月日,比如2016年10月1日为:01161001,MACHINEDATE+19000000后才是真正的日期值,公式内容中请不要直接写8位长的日期数字
    `,
  },
  {
    label: "MACHINETIME",
    detail: "当前系统的时间",
    documentation: `
    取得当前客户端机器的时间,比如11:01:15时为110115
    `,
  },
  {
    label: "MACHINEWEEK",
    detail: "当前系统的星期",
    documentation: `
    取得当前客户端机器为星期几(1,2,3,4,5,6,0)
    `,
  },
  {
    label: "DRAWNULL",
    detail: "无效数",
    documentation: `
    返回无效数.
    用法:
    DRAWNULL
    例如:
    IF(CLOSE>REF(CLOSE,1),CLOSE,DRAWNULL)表示下跌时不画线
    `,
  },
];
