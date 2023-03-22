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
    如果是复权状态,序列行情数据为复权后的数据;
    对于A股,若复权时需要当时的真实均价,可以用AMO/(VOL*100)来替代
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
    detail: "成交量(手)",
    documentation: `
    返回该周期成交量.
    用法:
    VOL
    `,
  },
  {
    label: "V",
    detail: "成交量(手)",
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
    ADVANCE(本函数仅对沪深京指数有效),若为880005/880006等指数,则为涨幅在0-3%的家数
    `,
  },
  {
    label: "DECLINE",
    detail: "下跌家数",
    documentation: `
    返回该周期下跌家数.
    用法:
    DECLINE(本函数仅对沪深京指数有效),若为880005/880006等指数,则为涨幅在-3%-0的家数
    `,
  },
  {
    label: "AMOUNT",
    detail: "成交额(元)",
    documentation: `
    返回该周期成交额.期货和期权无成交金额,返回持仓量
    用法:
    AMOUNT
    `,
  },
  {
    label: "AMO",
    detail: "成交额(元)",
    documentation: `
    返回该周期成交额.期货和期权无成交金额,返回持仓量
    用法:
    AMO
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
    detail: "不定周期最高价(未来函数)",
    documentation: `
    返回该不定周期最高价,属于未来函数.
    用法:
    DHIGH
    `,
  },
  {
    label: "DOPEN",
    detail: "不定周期开盘价(未来函数)",
    documentation: `
    返回该不定周期开盘价,属于未来函数.
    用法:
    DOPEN
    `,
  },
  {
    label: "DLOW",
    detail: "不定周期最低价(未来函数)",
    documentation: `
    返回该不定周期最低价,属于未来函数.
    用法:
    DLOW
    `,
  },
  {
    label: "DCLOSE",
    detail: "不定周期收盘价(未来函数)",
    documentation: `
    返回该不定周期收盘价,属于未来函数.
    用法:
    DCLOSE
    `,
  },
  {
    label: "DVOL",
    detail: "不定周期成交量(未来函数)",
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
    detail: "时间(时分)",
    documentation: `
    取得该周期的时分,适用于日线以下周期
    用法: 
    TIME
    函数返回有效值范围为(0000-2359)
    `,
  },
  {
    label: "TIME2",
    detail: "时间(时分秒)",
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
    求该品种当前时刻已开盘有多少分钟.
    用法:
    FROMOPEN
    FROMOPEN.返回当前时刻距开盘有多少分钟(开市期间的相对时间).
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
  {
    label: "BACKSET",
    detail: "向前赋值(未来函数)",
    documentation: `
    属于未来函数,将当前位置到若干周期前的数据设为1.
    用法:
    BACKSET(X,N),若X非0,则将当前位置到N周期前的数值设为1.
    例如:
    BACKSET(CLOSE>OPEN,2)若收阳则将该周期及前一周期数值设为1,否则为0
    `,
  },
  {
    label: "ALIGNRIGHT",
    detail: "有效数据右对齐",
    documentation: `
    有效数据右对齐.
    用法:
    ALIGNRIGHT(X)有效数据向右移动,左边空出来的周期填充无效值
    例如:TC:=IF(CURRBARSCOUNT=2 || CURRBARSCOUNT=5,DRAWNULL,C);XC:ALIGNRIGHT(TC);删除了两天的收盘价,并将剩余数据右移
    `,
  },
  {
    label: "BARSCOUNT",
    detail: "有效数据周期数",
    documentation: `
    有效数据周期数.
    用法:
    BARSCOUNT(X)第一个有效数据到当前的间隔周期数
    注意:判断范围为指标或条件选股计算时公式使用的数据,如果给画线指标的数据少(比如没有按下箭头取更多K线)或给条件选股给的数据少,这个有效值也可能少
    `,
  },
  {
    label: "BARSTATUS",
    detail: "数据位置状态",
    documentation: `
    BARSTATUS返回数据的位置信息,结果1表示第一根K线,2表示最后一根K线,0表示在中间位置.
    例如:
    BARSTATUS=2表示当前是序列数据的最后一个.
    `,
  },
  {
    label: "CURRBARSCOUNT",
    detail: "到最后交易的周期",
    documentation: `
    求到最后K线的周期数.从最新一根K线倒数编号,从1开始计数.
    用法:
    CURRBARSCOUNT 
    `,
  },
  {
    label: "TOTALBARSCOUNT",
    detail: "总的周期数",
    documentation: `
    求总的周期数.
    用法:
    TOTALBARSCOUNT 求总的周期数
    `,
  },
  {
    label: "ISLASTBAR",
    detail: "是否最后一个周期",
    documentation: `
    判断是否为最后一个周期.
    用法:
    ISLASTBAR 判断是否为最后一个周期
    `,
  },
  {
    label: "BARSLAST",
    detail: "上一条件成立位置",
    documentation: `
    上一次条件成立到当前的周期数.
    用法:
    BARSLAST(X):上一次X不为0到现在的周期数
    例如:
    BARSLAST(CLOSE/REF(CLOSE,1)>=1.1)表示上一个涨停板到当前的周期数
    `,
  },
  {
    label: "BARSLASTS",
    detail: "倒数第N次成立时距今的周期数",
    documentation: `
    倒数第N次成立时距今的周期数.
    用法:
    BARSLASTS(X,N):X倒数第N满足到现在的周期数,N支持变量
    `,
  },
  {
    label: "BARSNEXT",
    detail: "下一条件成立位置(未来函数)",
    documentation: `
    属于未来函数,下一次条件成立到当前的周期数.
    用法:
    BARSNEXT(X):下一次X不为0到现在的周期数
    例如:
    BARSNEXT(CLOSE/REF(CLOSE,1)>=1.1)表示下一个涨停板到当前的周期数
    `,
  },
  {
    label: "BARSSINCEN",
    detail: "N周期内首个条件成立位置",
    documentation: `
    N周期内第一个条件成立到当前的周期数.
    用法:
    BARSSINCEN(X,N):N周期内第一次X不为0到现在的周期数,N为常量
    例如:
    BARSSINCEN(HIGH>10,10)表示10个周期内股价超过10元时到当前的周期数
    `,
  },
  {
    label: "BARSSINCE",
    detail: "首个条件成立位置",
    documentation: `
    第一个条件成立到当前的周期数.
    用法:
    BARSSINCE(X):第一次X不为0到现在的周期数
    例如:
    BARSSINCE(HIGH>10)表示股价超过10元时到当前的周期数
    `,
  },
  {
    label: "COUNT",
    detail: "统计",
    documentation: `
    统计满足条件的周期数.
    用法:
    COUNT(X,N),统计N周期中满足X条件的周期数,若N<0则从第一个有效值开始.
    例如:
    COUNT(CLOSE>OPEN,20)表示统计20周期内收阳的周期数
    `,
  },
  {
    label: "BARSLASTCOUNT",
    detail: "条件连续成立次数",
    documentation: `
    统计连续满足条件的周期数.
    用法:
    BARSLASTCOUNT(X),统计连续满足X条件的周期数.
    例如:
    BARSLASTCOUNT(CLOSE>OPEN)表示统计连续收阳的周期数
    `,
  },
  {
    label: "HHV",
    detail: "最高值",
    documentation: `
    求最高值.
    用法:
    HHV(X,N),求N周期内X最高值,N=0则从第一个有效值开始.
    例如:
    HHV(HIGH,30)表示求30日最高价
    `,
  },
  {
    label: "HHVBARS",
    detail: "上一高点位置",
    documentation: `
    求上一高点到当前的周期数.
    用法:
    HHVBARS(X,N):求N周期内X最高值到当前周期数,N=0表示从第一个有效值开始统计
    例如:
    HHVBARS(HIGH,0)求得历史新高到到当前的周期数
    `,
  },
  {
    label: "HOD",
    detail: "高值名次",
    documentation: `
    求高值名次.
    用法:
    HOD(X,N):求当前X数据是N周期内的第几个高值,N=0则从第一个有效值开始.
    例如:
    HOD(HIGH,20)返回是20日的第几个高价
    `,
  },
  {
    label: "LLV",
    detail: "最低值",
    documentation: `
    求最低值.
    用法:
    LLV(X,N),求N周期内X最低值,N=0则从第一个有效值开始.
    例如:
    LLV(LOW,0)表示求历史最低价
    `,
  },
  {
    label: "LLVBARS",
    detail: "上一低点位置",
    documentation: `
    求上一低点到当前的周期数.
    用法:
    LLVBARS(X,N):求N周期内X最低值到当前周期数,N=0表示从第一个有效值开始统计
    例如:
    LLVBARS(HIGH,20)求得20日最低点到当前的周期数
    `,
  },
  {
    label: "LOD",
    detail: "低值名次",
    documentation: `
    求低值名次.
    用法:
    LOD(X,N):求当前X数据是N周期内的第几个低值,N=0则从第一个有效值开始.
    例如:
    LOD(LOW,20)返回是20日的第几个低价
    `,
  },
  {
    label: "HHVLLV",
    detail: "阶段最高最低值",
    documentation: `
    阶段最高最低值.
    用法:
    HHVLLV(X,T,N1,N2),表示前N1日到前N2日时段内的X最高值(T=0时)或最低值(T=1时)。 若N1为0,表示从第一天开始,N2为0,表示到最后日止,当N1,N2非0时,N1应>=N2。
    `,
  },
  {
    label: "REVERSE",
    detail: "求相反数",
    documentation: `
    求相反数.
    用法:
    REVERSE(X)返回-X.
    例如:
    REVERSE(CLOSE)返回-CLOSE
    `,
  },
  {
    label: "REF",
    detail: "日前的",
    documentation: `
    引用若干周期前的数据.
    用法:
    REF(X,A),引用A周期前的X值.A可以是变量.
    例如:
    REF(CLOSE,BARSCOUNT(C)-1)表示第二根K线的收盘价.
    `,
  },
  {
    label: "REFX",
    detail: "日后的(未来函数)",
    documentation: `
    属于未来函数,引用若干周期后的数据.
    用法:
    REFX(X,A),引用A周期后的X值.A可以是变量.
    例如:
    TT:=IF(C>O,1,2);
    REFX(CLOSE,TT);表示阳线引用下一周期的收盘价,阴线引用日后第二周期的收盘价.
    `,
  },
  {
    label: "REFV",
    detail: "日前的(平滑处理)",
    documentation: `
    引用若干周期前的数据(平滑处理).
    用法:
    REFV(X,A),引用A周期前的X值.A可以是变量.
    例如:
    REFV(CLOSE,BARSCOUNT(C)-1)表示第二根K线的收盘价.
    `,
  },
  {
    label: "REFXV",
    detail: "日后的(平滑处理)(未来函数)",
    documentation: `
    属于未来函数,引用若干周期后的数据(平滑处理).
    用法:
    REFXV(X,A),引用A周期后的X值.A可以是变量.
    例如:
    REFXV(CLOSE,1)表示下一周期的收盘价,在日线上就是明天收盘价
    `,
  },
  {
    label: "REFDATE",
    detail: "日",
    documentation: `
    引用自1900年以来指定日期的数据.
    用法:
    REFDATE(X,A),引用A日期的X值.
    例如:
    REFDATE(CLOSE,1011208)表示2001年12月08日的收盘价
    `,
  },
  {
    label: "CALCSTOCKINDEX",
    detail: "指标引用",
    documentation: `
    指标引用.
    用法:CALCSTOCKINDEX(品种代码,指标名称,指标输出),返回该指标相应输出的计算值.
    例如:
    CALCSTOCKINDEX('SH600000','KDJ',3)表示上证600000的KDJ指标第3个输出即J之值,第一个参数可在前面加SZ(深市),SH(沪市),BJ(京市),或市场_,,
    CALCSTOCKINDEX('47_IFL0','MACD',2)表示IFL0品种的MACD指标第2个输出值.
    注意:引用品种的对应周期的数据必须要先下载到本地
    `,
  },
  {
    label: "SUM",
    detail: "累和",
    documentation: `
    求总和.
    用法:
    SUM(X,N),统计N周期中X的总和,N=0则从第一个有效值开始.
    例如:
    SUM(VOL,0)表示统计从上市第一天以来的成交量总和
    `,
  },
  {
    label: "MULAR",
    detail: "累乘",
    documentation: `
    求累乘.
    用法:
    MULAR(X,N),统计N周期中X的乘积.N=0则从第一个有效值开始.
    例如:
    MULAR(C/REF(C,1),0)表示统计从上市第一天以来的复利
    `,
  },
  {
    label: "FILTER",
    detail: "过滤",
    documentation: `
    过滤连续出现的信号.
    用法:FILTER(X,N):X满足条件后,将其后N周期内的数据置为0,N为常量.
    例如:
    FILTER(CLOSE>OPEN,5)查找阳线,5天内再次出现的阳线不被记录在内
    `,
  },
  {
    label: "FILTERX",
    detail: "反向过滤",
    documentation: `
    反向过滤连续出现的信号.
    用法:FILTERX(X,N):X满足条件后,将其前N周期内的数据置为0,N为常量.
    例如:
    FILTERX(CLOSE>OPEN,5)查找阳线,前5天内出现过的阳线不被记录在内
    `,
  },
  {
    label: "TFILT",
    detail: "区间过滤",
    documentation: `
    对指定时间段的数据进行过滤,该时间段以外的数据无效.
    用法:
    TFILT(X,D1,M1,D2,M2)
    例如:
    TFILT(CLOSE,1040101,1025,1040101,1345)表示在2004年1月1日的10:25到2004年1月1日的13:45的收盘价是有效的.
    周期以日为基本单位的,分时为0有效.
    `,
  },
  {
    label: "TFILTER",
    detail: "信号过滤(多头)",
    documentation: `
    过滤连续出现的信号.
    用法:TFILTER(买入条件,卖出条件,N);过滤掉买入(卖出)信号发出后,下一个反向信号发出前的所有买入(卖出)信号.

    N=1表示仅对买入信号过滤;
    N=2表示仅对卖出信号过滤;
    N=0表示对买入和卖出信号都过滤,返回1,2表示买入或卖出条件成立;
    同一K线上只能有一个信号;

    例如:
    ENTERLONG:TFILTER(买入,卖出,1);
    EXITLONG:TFILTER(买入,卖出,2);
    `,
  },
  {
    label: "TTFILTER",
    detail: "信号过滤(多空)",
    documentation: `
    按照开平配对等原则过滤不合理的信号.
    用法:TTFILTER(买入开仓,卖出平仓,卖出开仓,买入平仓,N);

    主要规则有:
    1.连续的同方向指令只有第一个有效,其他的将被过滤;
    2.交易信号必须配对出现(比如前面已经有了买开指令,则后面只允许出现卖平指令,其他的指令都被过滤掉);

    N=1表示仅对买入开仓信号过滤;
    N=2表示仅对卖出平仓信号过滤;
    N=3表示仅对卖出开仓信号过滤;
    N=4表示仅对买入平仓信号过滤;
    N=0表示都过滤,返回1,2,3,4分别表示对应的条件成立;
    同一K线上只能有一个信号;

    例如:
    ENTERLONG:TTFILTER(买入开仓,卖出平仓,卖出开仓,买入平仓,1);
    EXITLONG:TTFILTER(买入开仓,卖出平仓,卖出开仓,买入平仓,2);
    ENTERSHORT:TTFILTER(买入开仓,卖出平仓,卖出开仓,买入平仓,3);
    EXITSHORT:TTFILTER(买入开仓,卖出平仓,卖出开仓,买入平仓,4);
    `,
  },
  {
    label: "TR",
    detail: "真实波幅",
    documentation: `
    求真实波幅, (最高-最低),(最高-昨收),(最低-昨收)三者绝对值中的最大值.
    用法:
    TR,求真实波幅.
    例如:ATR:=MA(TR,10);
    表示求真实波幅的10周期均值
    `,
  },
  {
    label: "SUMBARS",
    detail: "累加到指定值的周期数",
    documentation: `
    向前累加到指定值到现在的周期数.
    用法:
    SUMBARS(X,A):将X向前累加直到大于等于A,返回这个区间的周期数,若所有的数据都累加后还不能达到A,则返回此时前面的总周期数.
    例如:SUMBARS(VOL,CAPITAL)求完全换手到现在的周期数
    `,
  },
  {
    label: "SUMBARSX",
    detail: "累加到指定值的周期数",
    documentation: `
    向前累加到指定值到现在的周期数.
    用法:
    SUMBARSX(X,A):将X向前累加直到大于等于A,返回这个区间的周期数,若所有的数据都累加后还不能达到A,则返回无效值
    `,
  },
  {
    label: "MA",
    detail: "简单移动平均",
    documentation: `
    返回简单移动平均
    用法:
    MA(X,N):X的N日简单移动平均,算法(X1+X2+X3+...+Xn)/N,N支持变量
    `,
  },
  {
    label: "SMA",
    detail: "移动平均",
    documentation: `
    返回移动平均
    用法:
    SMA(X,N,M):X的N日移动平均,M为权重,如Y=(X*M+Y'*(N-M))/N
    `,
  },
  {
    label: "TMA",
    detail: "移动平均",
    documentation: `
    返回移动平均
    用法:
    TMA(X,A,B),A和B必须小于1,算法	Y=(A*Y'+B*X),其中Y'表示上一周期Y值.初值为X
    `,
  },
  {
    label: "MEMA",
    detail: "平滑移动平均",
    documentation: `
    返回平滑移动平均
    用法:
    MEMA(X,N):X的N日平滑移动平均,如Y=(X+Y'*(N-1))/N
    MEMA(X,N)相当于SMA(X,N,1)
    `,
  },
  {
    label: "EMA",
    detail: "指数移动平均",
    documentation: `
    返回指数移动平均
    用法:
    EMA(X,N):X的N日指数移动平均.算法:Y=(X*2+Y'*(N-1))/(N+1)
    EMA(X,N)相当于SMA(X,N+1,2),N支持变量
    `,
  },
  {
    label: "EXPMA",
    detail: "指数移动平均",
    documentation: `
    与EMA的用法一致
    `,
  },
  {
    label: "EXPMEMA",
    detail: "指数平滑移动平均",
    documentation: `
    返回指数平滑移动平均
    用法:
    EXPMEMA(X,N):X的N日指数平滑移动平均,N不支持变量
    EXPMEMA同EMA(EXPMA)的差别在于周期不满足N时,返回无效值
    `,
  },
  {
    label: "WMA",
    detail: "加权移动平均",
    documentation: `
    返回加权移动平均
    用法:
    WMA(X,N):X的N日加权移动平均.算法:Yn=(1*X1+2*X2+...+n*Xn)/(1+2+...+n)
    `,
  },
  {
    label: "DMA",
    detail: "动态移动平均",
    documentation: `
    求动态移动平均.
    用法:
    DMA(X,A),求X的动态移动平均.
    算法:Y=A*X+(1-A)*Y',其中Y'表示上一周期Y值,A必须大于0且小于1.A支持变量.
    例如:
    DMA(CLOSE,VOL/CAPITAL)表示求以换手率作平滑因子的平均价
    `,
  },
  {
    label: "AMA",
    detail: "自适应均线",
    documentation: `
    求自适应均线值.
    用法:
    AMA(X,A),A为自适应系数,必须小于1.
    算法:
    Y=Y'+A*(X-Y').初值为X
    `,
  },
  {
    label: "XMA",
    detail: "偏移移动平均(未来函数)",
    documentation: `
    属于未来函数,返回偏移移动平均
    用法:
    XMA(X,N):X的N日偏移移动平均,用到了当日以后N/2日的数据,N支持变量,只供内部测试使用
    `,
  },
  {
    label: "RANGE",
    detail: "介于某个范围之间",
    documentation: `
    RANGE(A,B,C):A在B和C范围之间,B<A<C.
    用法:
    RANGE(A,B,C)表示A大于B同时小于C时返回1,否则返回0
    `,
  },
  {
    label: "CONST",
    detail: "取值设为常数",
    documentation: `
    CONST(A):取A最后的值为常量.
    用法:
    CONST(INDEXC)表示取指数现价
    `,
  },
  {
    label: "TOPRANGE",
    detail: "当前值是近多少周期内的最大值",
    documentation: `
    当前值是近多少周期内的最大值.
    用法:
    TOPRANGE(X):X是近多少周期内X的最大值
    例如:
    TOPRANGE(HIGH)表示当前最高价是近多少周期内最高价的最大值
    `,
  },
  {
    label: "LOWRANGE",
    detail: "当前值是近多少周期内的最小值",
    documentation: `
    当前值是近多少周期内的最小值.
    用法:
    LOWRANGE(X):X是近多少周期内X的最小值
    例如:
    LOWRANGE(LOW)表示当前最低价是近多少周期内最低价的最小值
    `,
  },
  {
    label: "FINDHIGH",
    detail: "寻找指定周期内的特定最大值",
    documentation: `
    N周期前的M周期内的第T个最大值.
    用法:
    FINDHIGH(VAR,N,M,T):VAR在N日前的M天内第T个最高价
    `,
  },
  {
    label: "FINDHIGHBARS",
    detail: "寻找指定周期内的特定最大值到当前周期的周期数",
    documentation: `
    N周期前的M周期内的第T个最大值到当前周期的周期数.
    用法:
    FINDHIGHBARS(VAR,N,M,T):VAR在N日前的M天内第T个最高价到当前周期的周期数
    `,
  },
  {
    label: "FINDLOW",
    detail: "寻找指定周期内的特定最小值",
    documentation: `
    N周期前的M周期内的第T个最小值.
    用法:
    FINDLOW(VAR,N,M,T):VAR在N日前的M天内第T个最低价
    `,
  },
  {
    label: "FINDLOWBARS",
    detail: "寻找指定周期内的特定最小值到当前周期的周期数",
    documentation: `
    N周期前的M周期内的第T个最小值到当前周期的周期数.
    用法:
    FINDLOWBARS(VAR,N,M,T):VAR在N日前的M天内第T个最低价到当前周期的周期数.
    `,
  },
  {
    label: "SPLIT",
    detail: "除权除息数据",
    documentation: `
    除权除息数据
    SPLIT(N,TYPE),取得之前第N次除息除权(送转股,分红)的除权除息数据,参数为0表示送转股的比例(送转/(送转+10)),1表示每股分红(分红/10)),例如:SPLIT(0,0)=0.5表示最近一次除权可能是10送10
    `,
  },
  {
    label: "SPLITBARS",
    detail: "除权除息到现在的周期数",
    documentation: `
    除权除息到现在的周期数
    SPLITBARS(N,TYPE),取得之前第N次除权除息到当前的周期数,参数为0表示送转股,1表示分红,2表示送转股或分红,例如:SPLITBARS(0,0)=0表示当天发生除权
    `,
  },
  {
    label: "DIVFACTOR",
    detail: "除权因子",
    documentation: `
    除权因子
    DIVFACTOR(TYPE),TYPE=0表示根据使用公式时带进来的复权方式(自适应) 1表示前复权 2表示后复权
    `,
  },
  {
    label: "ZTPRICE",
    detail: "计算涨停价",
    documentation: `
    返回涨停价
    用法:
    ZTPRICE(REF(CLOSE,1),0.1):按10%计算得到在昨收盘基础上的涨停价(对于复权序列K线,由于复权处理或不复权时的分红转增,根据前一天的收盘价计算结果可能与涨停价不符)
    比如:
    ZTPrice(REF(QHJSJ,1),0.1),得到期货的涨停价
    `,
  },
  {
    label: "DTPRICE",
    detail: "计算跌停价",
    documentation: `
    返回跌停价
    用法:
    DTPRICE(REF(CLOSE,1),0.1):按10%计算得到在昨收盘基础上的跌停价(对于复权序列K线,由于复权处理或不复权时的分红转增,根据前一天的收盘价计算结果可能与跌停价不符)
    比如:
    DTPrice(REF(QHJSJ,1),0.6),得到期货的跌停价(跌停比例为0.6的话)
    `,
  },
  {
    label: "TDXDLL1",
    detail: "第1号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL1(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL2",
    detail: "第2号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL2(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL3",
    detail: "第3号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL3(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL4",
    detail: "第4号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL4(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL5",
    detail: "第5号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL5(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL6",
    detail: "第6号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL6(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL7",
    detail: "第7号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL7(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL8",
    detail: "第8号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL8(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL9",
    detail: "第9号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL9(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "TDXDLL10",
    detail: "第10号DLL",
    documentation: `
    调用DLL中的函数.
    用法:
    DLL10(funcid,param1,param2,param3),funcid为数字,表示调用dll函数编号.
    `,
  },
  {
    label: "USERFUNC0",
    detail: "DLL函数(无参数)",
    documentation: `
    调用DLL中的函数,DLL中内部对应定义.
    用法:
    USERFUNC0
    `,
  },
  {
    label: "USERFUNC1",
    detail: "DLL函数(1参数)",
    documentation: `
    调用DLL中的函数,DLL中内部对应定义.
    用法:
    USERFUNC1(param1)
    `,
  },
  {
    label: "USERFUNC2",
    detail: "DLL函数(2参数)",
    documentation: `
    调用DLL中的函数,DLL中内部对应定义.
    用法:
    USERFUNC2(param1,param2)
    `,
  },
  {
    label: "USERFUNC3",
    detail: "DLL函数(3参数)",
    documentation: `
    调用DLL中的函数,DLL中内部对应定义.
    用法:
    USERFUNC3(param1,param2,param3)
    `,
  },
  {
    label: "USERFUNC4",
    detail: "DLL函数(4参数)",
    documentation: `
    调用DLL中的函数,DLL中内部对应定义.
    用法:
    USERFUNC4(param1,param2,param3,param4)
    `,
  },
  {
    label: "CODE",
    detail: "品种代码",
    documentation: `
    返回品种代码.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,CODE);在屏幕左上角显示品种代码
    `,
  },
  {
    label: "STKNAME",
    detail: "品种名称",
    documentation: `
    返回品种名称.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,STKNAME);在屏幕左上角显示品种名称
    `,
  },
  {
    label: "HYBLOCK",
    detail: "所属行业(字串)",
    documentation: `
    返回品种所属行业.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,HYBLOCK);在屏幕左上角显示所属行业板块
    `,
  },
  {
    label: "DYBLOCK",
    detail: "所属地域(字串)",
    documentation: `
    返回品种所属地域.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,DYBLOCK);在屏幕左上角显示所属地域板块
    `,
  },
  {
    label: "MOREHYBLOCK",
    detail: "所属细分行业(字串)",
    documentation: `
    返回品种所属细分行业.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,MOREHYBLOCK);在屏幕左上角显示所属细分行业板块
    `,
  },
  {
    label: "MAINBUSINESS",
    detail: "主营构成(字串)",
    documentation: `
    返回主营构成.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,MAINBUSINESS);在屏幕左上角显示主营构成
    `,
  },
  {
    label: "GNBLOCK",
    detail: "所属概念板块(字串)",
    documentation: `
    返回所属概念板块.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,GNBLOCK);在屏幕左上角显示所属概念板块
    `,
  },
  {
    label: "FGBLOCK",
    detail: "所属风格板块(字串)",
    documentation: `
    返回所属风格板块.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,FGBLOCK);在屏幕左上角显示所属风格板块
    `,
  },
  {
    label: "ZSBLOCK",
    detail: "所属指数板块(字串)",
    documentation: `
    返回所属指数板块.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,ZSBLOCK);在屏幕左上角显示所属指数板块
    `,
  },
  {
    label: "ZHBLOCK",
    detail: "所属组合板块(字串)",
    documentation: `
    返回所属组合板块.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,ZHBLOCK);在屏幕左上角显示所属组合板块
    `,
  },
  {
    label: "ZDBLOCK",
    detail: "所属自定义板块(字串)",
    documentation: `
    返回所属自定义板块.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,ZDBLOCK);在屏幕左上角显示所属自定义板块
    `,
  },
  {
    label: "GNBLOCKNUM",
    detail: "所属概念板块(个数)",
    documentation: `
    返回所属概念板块的个数,比如:IF(GNBLOCKNUM>5,1,0);.
    `,
  },
  {
    label: "FGBLOCKNUM",
    detail: "所属风格板块(个数)",
    documentation: `
    返回所属风格板块的个数.
    `,
  },
  {
    label: "ZSBLOCKNUM",
    detail: "所属指数板块(个数)",
    documentation: `
    返回所属指数板块的个数.
    `,
  },
  {
    label: "ZHBLOCKNUM",
    detail: "所属组合板块(个数)",
    documentation: `
    返回所属组合板块的个数.
    `,
  },
  {
    label: "ZDBLOCKNUM",
    detail: "所属自定义板块(个数)",
    documentation: `
    返回所属自定义板块的个数
    `,
  },
  {
    label: "HYZSCODE",
    detail: "所属行业的板块指数代码",
    documentation: `
    返回品种所属行业的板块指数代码.比如: CALCSTOCKINDEX(HYZSCODE,'KDJ',3);
    `,
  },
  {
    label: "HYSYL",
    detail: "指数市盈率或个股所属行业的市盈率",
    documentation: `
    返回指数市盈率或个股所属行业的市盈率.
    `,
  },
  {
    label: "HYSJL",
    detail: "指数市净率或个股所属行业的市净率",
    documentation: `
    返回指数市净率或个股所属行业的市净率.
    `,
  },
  {
    label: "GNBKZSCODE",
    detail: "所属概念板块的指数代码",
    documentation: `
    返回品种所属概念板块的指数代码,参数表示是第几个,支持1-60.
    用于支持Level2行情的版本
    比如: CALCSTOCKINDEX(GNBKZSCODE(1),'KDJ',3);
    `,
  },
  {
    label: "FGBKZSCODE",
    detail: "所属风格板块的指数代码",
    documentation: `
    返回品种所属风格板块的指数代码,参数表示是第几个,支持1-60.
    用于支持Level2行情的版本
    比如: CALCSTOCKINDEX(FGBKZSCODE(1),'KDJ',3);
    `,
  },
  {
    label: "INBLOCK",
    detail: "是否属于某板块",
    documentation: `
    返回品种是否属于某板块.
    用法:
    if(INBLOCK('沪深300'),x,y);

    板块名称支持系统板块(上证Ａ股,深证Ａ股,沪深Ａ股/全部Ａ股,创业板,科创板,自选股,板块指数等),地区,行业(按系统设置的通达信二级或研究二级),概念,风格,指数,组合和自定义板块,注意名称要准确(HY.和GN.和MY.开头就直接找行业和概念和自定义板块)
    `,
  },
  {
    label: "NAMELIKE",
    detail: "模糊匹配品种名称",
    documentation: `
    品种名称是否以参数开头.
    用法:
    if(NAMELIKE('ST'),x,y);
    `,
  },
  {
    label: "CODELIKE",
    detail: "模糊匹配品种代码",
    documentation: `
    品种代码是否以参数开头.
    用法:
    if(CODELIKE('600'),x,y);
    `,
  },
  {
    label: "NAMEINCLUDE",
    detail: "品种名称中包含",
    documentation: `
    品种名称中是否包含参数.
    用法:
    if(NAMEINCLUDE('文化'),x,y);
    `,
  },
  {
    label: "GETNAMEOFCODE",
    detail: "根据品种代码得到品种名称",
    documentation: `
    根据品种代码和市场(比如深交所为0,上交所和板块指数为1,未知时可传-1),得到品种名称.
    用法:
    DRAWTEXT_FIX(ISLASTBAR,0,0,0,GETNAMEOFCODE(1,HYZSCODE));
    `,
  },
  {
    label: "CON2STR",
    detail: "取值转为字符串",
    documentation: `
    CON2STR(A,N):取A最后的值(非序列值)转为字符串,小数位数N.
    用法:
    CON2STR(FINANCE(20),3)表示取营业收入,以3位小数转为字符串
    `,
  },
  {
    label: "VAR2STR",
    detail: "取值转为字符串(序列)",
    documentation: `
    VAR2STR(A,N):取A的每一个值转为字符串,小数位数N. 
    每个数据都进行序列运算,若用于多股选股,建议换用CON2STR 
    用法:
    VAR2STR(C,3)表示取收盘价,以3位小数转为字符串
    `,
  },
  {
    label: "STR2CON",
    detail: "字符串转为数字",
    documentation: `
    STR2CON(S):将字符串S转化为数字.
    用法:
    STR2CON('2365.02')表示将字符串'2365.02'转化为数字2365.02
    `,
  },
  {
    label: "STRLEN",
    detail: "得到字符串的长度",
    documentation: `
    STRLEN(S):得到字符串S(非序列值)的长度.
    用法:
    STRLEN('通达信')表示字符串'通达信'为6
    `,
  },
  {
    label: "STRCAT",
    detail: "字符串相加",
    documentation: `
    STRCAT(A,B):将两个字符串A,B(非序列化)相加成一个字符串C.
    用法:
    STRCAT('多头','开仓')将两个字符串'多头','开仓'相加成一个字符串'多头开仓'
    `,
  },
  {
    label: "STRSPACE",
    detail: "字符串加一空格",
    documentation: `
    STRSPACE(A):字符串附带一空格
    `,
  },
  {
    label: "SUBSTR",
    detail: "字符串中取一部分",
    documentation: `
    SUBSTR(S,A,N):取字符串S中从位置A取N长的子字符串,A从1开始
    `,
  },
  {
    label: "VARCAT",
    detail: "字符串相加(序列)",
    documentation: `
    VARCAT(A,B):将两个字符串A,B相加成一个字符串C.
    每个数据都进行序列运算,若用于多股选股,建议换用STRCAT 
    用法:
    DRAWTEXT(CLOSE>OPEN,LOW,VARCAT('多头',VAR2STR(C,2))) 将两个字符串相加成一个字符串并按条件显示出来
    `,
  },
  {
    label: "STRCMP",
    detail: "字符串比较",
    documentation: `
    STRCMP(A,B):比较两个字符串A,B是否相等.
    用法:
    STRCMP(HYBLOCK,'房地产')将成分股行业字符串与'房地产'比较,是否相等,如果相等表示属于房地产板块
    `,
  },
  {
    label: "FINDSTR",
    detail: "字符串查找",
    documentation: `
    FINDSTR(A,B):在字符串A中查找字符串B,如果找到返回1,否则返回0.
    用法:
    FINDSTR('多头开仓','开仓')在字符串'多头开仓'中查找字符串'开仓',返回1
    `,
  },
  {
    label: "CROSS",
    detail: "上穿",
    documentation: `
    两条线交叉.
    用法:
    CROSS(A,B)表示当A从下方向上穿过B时返回1,否则返回0
    例如:
    CROSS(MA(CLOSE,5),MA(CLOSE,10))表示5日均线与10日均线交金叉
    `,
  },
  {
    label: "LONGCROSS",
    detail: "持续周期后上穿",
    documentation: `
    两条线维持一定周期后交叉.
    用法:LONGCROSS(A,B,N)表示A在N周期内都小于B,本周期从下方向上穿过B时返回1,否则返回0
    `,
  },
  {
    label: "UPNDAY",
    detail: "连涨",
    documentation: `
    返回周期数内是否连涨.
    用法:
    UPNDAY(CLOSE,M)
    表示连涨M个周期,M为常量
    `,
  },
  {
    label: "DOWNNDAY",
    detail: "连跌",
    documentation: `
    返回周期数内是否连跌.
    用法:
    DOWNNDAY(CLOSE,M)
    表示连跌M个周期,M为常量
    `,
  },
  {
    label: "NDAY",
    detail: "连大",
    documentation: `
    返回是否持续存在X>Y
    用法:
    NDAY(CLOSE,OPEN,3)
    表示连续3日收阳线
    `,
  },
  {
    label: "EXIST",
    detail: "存在",
    documentation: `
    是否存在.
    例如:
    EXIST(CLOSE>OPEN,10) 
    表示10日内存在着阳线,第2个参数为常量
    `,
  },
  {
    label: "EXISTR",
    detail: "存在",
    documentation: `
    EXISTR(X,A,B):是否存在(前几日到前几日间).
    例如:
    EXISTR(CLOSE>OPEN,10,5) 
    表示从前10日内到前5日内存在着阳线
    若A为0,表示从第一天开始,B为0,表示到最后日止,第2,3个参数为常量
    `,
  },
  {
    label: "EVERY",
    detail: "一直存在",
    documentation: `
    一直存在.
    例如:
    EVERY(CLOSE>OPEN,N) 
    表示N日内一直阳线(N应大于0,小于总周期数,N支持变量)
    `,
  },
  {
    label: "LAST",
    detail: "持续存在",
    documentation: `
    LAST(X,A,B):持续存在.
    例如:
    LAST(CLOSE>OPEN,10,5) 
    表示从前10日到前5日内一直阳线
    若A为0,表示从第一天开始,B为0,表示到最后日止
    `,
  },
  {
    label: "NOT",
    detail: "取反",
    documentation: `
    求逻辑非.
    用法:
    NOT(X)返回非X,即当X=0时返回1,否则返回0
    例如:
    NOT(ISUP)表示平盘或收阴
    `,
  },
  {
    label: "ISVALID",
    detail: "判断有效值",
    documentation: `
    判断是否是有效数值.
    `,
  },
  {
    label: "IF",
    detail: "条件判断",
    documentation: `
    根据条件求不同的值.
    用法:
    IF(X,A,B)若X不为0则返回A,否则返回B
    例如:
    IF(CLOSE>OPEN,HIGH,LOW)表示该周期收阳则返回最高值,否则返回最低值
    `,
  },
  {
    label: "IFF",
    detail: "条件判断",
    documentation: `
    用法同IF一样
    `,
  },
  {
    label: "IFN",
    detail: "条件反判断",
    documentation: `
    根据条件求不同的值,同IF判断相反.
    用法:
    IFN(X,A,B)若X不为0则返回B,否则返回A
    例如:
    IFN(CLOSE>OPEN,HIGH,LOW)表示该周期收阴则返回最高值,否则返回最低值
    `,
  },
  {
    label: "IFC",
    detail: "条件判断,可终止",
    documentation: `
    根据条件执行不同的语句(根据序列的最后一个数值来判断).
    用法:
    IFC(X,A,B)若X不为0则执行A,否则执行B.IFC与IF函数的区别:IFC根据X的值来选择性执行A或B表达式,并且只根据X序列的最后一个数据来判断.
    例如:
    IFC(CLOSE>OPEN,HIGH,TESTSKIP(1));L;表示当日收阳则返回最高值,并执行下一句"L;",否则退出公式计算
    `,
  },
  {
    label: "VALUEWHEN",
    detail: "条件跟随",
    documentation: `
    VALUEWHEN(COND,X) 
    当COND条件成立时,取X的当前值,否则取VALUEWHEN的上个值.
    `,
  },
  {
    label: "TESTSKIP",
    detail: "是否就此返回",
    documentation: `
    TESTSKIP(A):满足A则直接返回.
    用法:
    TESTSKIP(A) 
    表示如果满足条件A则该公式直接返回,不再计算接下来的表达式 注意:A为非序列数据,只取最后一个数据
    `,
  },
  {
    label: "MAX",
    detail: "较大值",
    documentation: `
    求最大值.
    用法:
    MAX(A,B)返回A和B中的较大值
    例如:
    MAX(CLOSE-OPEN,0)表示若收盘价大于开盘价返回它们的差值,否则返回0
    `,
  },
  {
    label: "MIN",
    detail: "较小值",
    documentation: `
    求最小值.
    用法:
    MIN(A,B)返回A和B中的较小值
    例如:
    MIN(CLOSE,OPEN)返回开盘价和收盘价中的较小值
    `,
  },
  {
    label: "MAX6",
    detail: "较大值",
    documentation: `
    求6个参数中的最大值.
    用法:
    MAX6(A,B,C,D,E,F)返回较大值
    `,
  },
  {
    label: "MIN6",
    detail: "较小值",
    documentation: `
    求6个参数中的最小值.
    用法:
    MIN6(A,B,C,D,E,F)返回较小值
    `,
  },
  {
    label: "ACOS",
    detail: "反余弦",
    documentation: `
    反余弦值.
    用法:
    ACOS(X)返回X的反余弦值
    `,
  },
  {
    label: "ASIN",
    detail: "反正弦",
    documentation: `
    反正弦值.
    用法:
    ASIN(X)返回X的反正弦值
    `,
  },
  {
    label: "ATAN",
    detail: "反正切",
    documentation: `
    反正切值.
    用法:
    ATAN(X)返回X的反正切值
    `,
  },
  {
    label: "COS",
    detail: "余弦",
    documentation: `
    余弦值.
    用法:
    COS(X)返回X的余弦值
    `,
  },
  {
    label: "SIN",
    detail: "正弦",
    documentation: `
    正弦值.
    用法:
    SIN(X)返回X的正弦值
    `,
  },
  {
    label: "TAN",
    detail: "正切",
    documentation: `
    正切值.
    用法:
    TAN(X)返回X的正切值
    `,
  },
  {
    label: "EXP",
    detail: "指数",
    documentation: `
    指数.
    用法:
    EXP(X)为e的X次幂
    例如:
    EXP(CLOSE)返回e的CLOSE次幂
    `,
  },
  {
    label: "LN",
    detail: "自然对数",
    documentation: `
    求自然对数.
    用法:
    LN(X)以e为底的对数
    例如:
    LN(CLOSE)求收盘价的对数
    `,
  },
  {
    label: "LOG",
    detail: "对数",
    documentation: `
    求10为底的对数.
    用法:
    LOG(X)取得X的对数
    例如:
    LOG(100)等于2
    `,
  },
  {
    label: "SQRT",
    detail: "开方",
    documentation: `
    开平方.
    用法:
    SQRT(X)为X的平方根
    例如:
    SQRT(CLOSE)收盘价的平方根
    `,
  },
  {
    label: "ABS",
    detail: "绝对值",
    documentation: `
    求绝对值.
    用法:
    ABS(X)返回X的绝对值
    例如:
    ABS(-34)返回34
    `,
  },
  {
    label: "POW",
    detail: "乘幂",
    documentation: `
    乘幂.
    用法:
    POW(A,B)返回A的B次幂
    例如:
    POW(CLOSE,3)求得收盘价的3次方
    `,
  },
  {
    label: "CEILING",
    detail: "向上舍入",
    documentation: `
    向上舍入.
    用法:
    CEILING(A)返回沿A数值增大方向最接近的整数
    例如:
    CEILING(12.3)求得13,CEILING(-3.5)求得-3
    `,
  },
  {
    label: "FLOOR",
    detail: "向下舍入",
    documentation: `
    向下舍入.
    用法:
    FLOOR(A)返回沿A数值减小方向最接近的整数
    例如:
    FLOOR(12.3)求得12,FLOOR(-3.5)求得-4
    `,
  },
  {
    label: "INTPART",
    detail: "整数部分",
    documentation: `
    取整.
    用法:
    INTPART(A)返回沿A绝对值减小方向最接近的整数
    例如:
    INTPART(12.3)求得12,INTPART(-3.5)求得-3
    `,
  },
  {
    label: "BETWEEN",
    detail: "介于",
    documentation: `
    介于.
    用法:
    BETWEEN(A,B,C)表示A处于B和C之间时返回1(B<=A<=C或C<=A<=B),否则返回0
    例如:
    BETWEEN(CLOSE,MA(CLOSE,10),MA(CLOSE,5))表示收盘价介于5日均线和10日均线之间
    `,
  },
  {
    label: "FRACPART",
    detail: "小数部分",
    documentation: `
    小数部分.
    用法:
    FRACPART(X),返回X的小数部分
    `,
  },
  {
    label: "ROUND",
    detail: "四舍五入",
    documentation: `
    四舍五入.
    用法:
    ROUND(X),返回X四舍五入到个位的数值
    `,
  },
  {
    label: "ROUND2",
    detail: "四舍五入",
    documentation: `
    四舍五入.
    用法:
    ROUND2(X,N),返回X四舍五入到N位小数的数值
    由于精度问题,数据越大误差可能越大
    `,
  },
  {
    label: "SIGN",
    detail: "符号",
    documentation: `
    取符号.
    用法:
    SIGN(X),返回X的符号.当X>0,X=0,X<0分别返回1,0,-1
    `,
  },
  {
    label: "MOD",
    detail: "模",
    documentation: `
    取模.
    用法:
    MOD(M,N),返回M关于N的模(M除以N的余数)
    例如:
    MOD(5,3)返回2 注意:公式系统对有效数字部分有要求,如果数字部分超过7-8位,会有精度丢失
    `,
  },
  {
    label: "RAND",
    detail: "随机正整数",
    documentation: `
    取随机数.
    用法:
    RAND(N),返回一个范围在1-N的随机整数
    `,
  },
  {
    label: "AVEDEV",
    detail: "平均绝对偏差",
    documentation: `
    AVEDEV(X,N) 返回平均绝对偏差
    `,
  },
  {
    label: "DEVSQ",
    detail: "数据偏差平方和",
    documentation: `
    DEVSQ(X,N) 返回数据偏差平方和
    `,
  },
  {
    label: "FORCAST",
    detail: "线性回归预测值",
    documentation: `
    FORCAST(X,N) 返回线性回归预测值,N支持变量
    `,
  },
  {
    label: "SLOPE",
    detail: "线性回归斜率",
    documentation: `
    SLOPE(X,N) 返回线性回归斜率,N支持变量
    `,
  },
  {
    label: "STD",
    detail: "估算标准差",
    documentation: `
    STD(X,N) 返回估算标准差,N支持变量
    `,
  },
  {
    label: "STDP",
    detail: "总体标准差",
    documentation: `
    STDP(X,N) 返回总体标准差,N支持变量
    `,
  },
  {
    label: "STDDEV",
    detail: "标准偏差",
    documentation: `
    STDDEV(X,N) 返回标准偏差
    `,
  },
  {
    label: "VAR",
    detail: "估算样本方差",
    documentation: `
    VAR(X,N) 返回估算样本方差,N支持变量
    `,
  },
  {
    label: "VARP",
    detail: "总体样本方差",
    documentation: `
    VARP(X,N) 返回总体样本方差,N支持变量
    `,
  },
  {
    label: "COVAR",
    detail: "协方差",
    documentation: `
    COVAR(X,Y,N) 返回X和Y的N周期的协方差,N支持变量
    `,
  },
  {
    label: "RELATE",
    detail: "相关系数",
    documentation: `
    RELATE(X,Y,N) 返回X和Y的N周期的相关系数,N支持变量
    `,
  },
  {
    label: "BETA",
    detail: "β(Beta)系数",
    documentation: `
    β(Beta)系数
    BETA(N) 返回当前证券N周期收益与对应大盘指数收益相比的贝塔系数,N支持变量
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "BETAEX",
    detail: "相关放大系数",
    documentation: `
    BETAEX(X,Y,N) 返回X与Y的N周期的相关放大系数,N支持变量
    `,
  },
  {
    label: "IVOLAT",
    detail: "期权波动率",
    documentation: `
    IVOLAT(N,M) 返回期权波动率 N表示计算周期 M表示类型,0:标的证券的历史波动率 1:隐含波动率
    `,
  },
  {
    label: "BLOCKSETNUM",
    detail: "板块股个数",
    documentation: `
    BLOCKSETNUM.横向统计
    用法:
    BLOCKSETNUM(板块名称),
    返回该板块的股票个数.
    板块名称支持系统板块(上证Ａ股,深证Ａ股,沪深Ａ股/全部Ａ股,创业板,科创板,自选股,板块指数等),地区,行业(按系统设置的通达信二级或研究二级),概念,风格,指数,组合和自定义板块,注意名称要准确(HY.和GN.和MY.开头就直接找行业和概念和自定义板块,此函数计算有较大耗时,请慎用于画线指标),
    第一个参数也可以是HYBLOCK等,某板块指数的STKNAME
    `,
  },
  {
    label: "HORCALC",
    detail: "板块统计",
    documentation: `
    HORCALC.横向统计
    用法:
    HORCALC(板块名称,数据项,计算方式,权重),
    数据项:
    100-HIGH,101-OPEN,102-LOW,103-CLOSE,104-VOL,105-涨幅,106-成交额
    计算方式:
    0-累加,1-排名次,2-平均值
    平均值权重:
    0-总股本,1-流通股本,2-等同权重,3-流通市值,4-总市值.
    板块名称支持系统板块(上证Ａ股,深证Ａ股,沪深Ａ股/全部Ａ股,创业板,科创板,自选股,板块指数等),地区,行业(按系统设置的通达信二级或研究二级),概念,风格,指数,组合和自定义板块,注意名称要准确(HY.和GN.和MY.开头就直接找行业和概念和自定义板块,此函数计算有较大耗时,请慎用于画线指标),
    第一个参数也可以是HYBLOCK等,某板块指数的STKNAME
    `,
  },
  {
    label: "INSORT",
    detail: "板块指标排序",
    documentation: `
    INSORT.横向统计
    用法:INSORT(板块名称,指标名称,指标输出,升降序),
    返回该股在板块成份股中某项指标输出数值的排序序号
    例如:
    INSORT('房地产','KDJ',3,0)表示该股的KDJ指标第三个输出即J之值在房地产板块中的排名,
    最后一个参数为0表示降序排名.
    板块名称支持系统板块(上证Ａ股,深证Ａ股,沪深Ａ股/全部Ａ股,创业板,科创板,自选股,板块指数等),地区,行业(按系统设置的通达信二级或研究二级),概念,风格,指数,组合和自定义板块,注意名称要准确(HY.和GN.和MY.开头就直接找行业和概念和自定义板块,此函数计算有较大耗时,请慎用于画线指标),
    第一个参数也可以是HYBLOCK等,某板块指数的STKNAME;
    对于支持Level2行情的版本,若第一个参数为HYINSORT,则表示其所属行业板块指数在所有行业板块指数中的排名;若为GNINSORT.?或FGINSORT.?,则表示其所属的第?个概念或风格板块指数在所有概念或风格指数中的排名
    `,
  },
  {
    label: "INSUM",
    detail: "板块指标统计",
    documentation: `
    INSUM.横向统计
    用法:INSUM(板块名称,指标名称,指标输出,计算类型),
    返回板块各成分该指标相应输出按计算类型得到的计算值.计算类型:0-累加,1-平均数,2-最大值,3-最小值,4-最大值所处的品种序号,5-最小值所处的品种序号.
    例如:
    INSUM('房地产','KDJ',3,0)表示房地产板块中所有股票的KDJ指标第三个输出即J之值的累加值.
    板块名称支持系统板块(上证Ａ股,深证Ａ股,沪深Ａ股/全部Ａ股,创业板,科创板,自选股,板块指数等),地区,行业(按系统设置的通达信二级或研究二级),概念,风格,指数,组合和自定义板块,注意名称要准确(HY.和GN.和MY.开头就直接找行业和概念和自定义板块,此函数计算有较大耗时,请慎用于画线指标),
    第一个参数也可以是HYBLOCK等,某板块指数的STKNAME,
    若为MYGNBK和MYFGBK(Level2行情的版本),则为它所属的一些概念板块指数和风格板块指数,例如:INSUM('MYGNBK','KDJ',3,4)
    `,
  },
  {
    label: "COST",
    detail: "成本分布",
    documentation: `
    成本分布情况.
    用法:
    COST(10),表示10%获利盘的价格是多少,即有10%的持仓量在该价格以下,其余90%在该价格以上,为套牢盘
    该函数仅对日线分析周期有效
    `,
  },
  {
    label: "PEAK",
    detail: "波峰值(未来函数)",
    documentation: `
    属于未来函数,前M个ZIG转向波峰值.
    用法:
    PEAK(K,N,M)表示之字转向ZIG(K,N)的前M个波峰的数值,M必须大于等于1
    例如:
    PEAK(1,5,1)表示%5最高价ZIG转向的上一个波峰的数值
    `,
  },
  {
    label: "PEAKBARS",
    detail: "波峰位置(未来函数)",
    documentation: `
    属于未来函数,前M个ZIG转向波峰到当前距离.
    用法:
    PEAKBARS(K,N,M)表示之字转向ZIG(K,N)的前M个波峰到当前的周期数,M必须大于等于1
    例如:
    PEAKBARS(0,5,1)表示%5开盘价ZIG转向的上一个波峰到当前的周期数
    `,
  },
  {
    label: "SAR",
    detail: "抛物转向",
    documentation: `
    抛物转向.
    用法:
    SAR(N,S,M),N为计算周期,S为步长,M为极值
    例如:
    SAR(10,2,20)表示计算10日抛物转向,步长为2%,极限值为20%
    `,
  },
  {
    label: "SARTURN",
    detail: "抛物转向点",
    documentation: `
    抛物转向点.
    用法:
    SARTURN(N,S,M),N为计算周期,S为步长,M为极值,若发生向上转向则返回1,若发生向下转向则返回-1,否则为0
    其用法与SAR函数相同
    `,
  },
  {
    label: "TROUGH",
    detail: "波谷值(未来函数)",
    documentation: `
    属于未来函数,前M个ZIG转向波谷值.
    用法:
    TROUGH(K,N,M)表示之字转向ZIG(K,N)的前M个波谷的数值,M必须大于等于1
    例如:
    TROUGH(2,5,2)表示%5最低价ZIG转向的前2个波谷的数值
    `,
  },
  {
    label: "TROUGHBARS",
    detail: "波谷位置(未来函数)",
    documentation: `
    属于未来函数,前M个ZIG转向波谷到当前距离.
    用法:
    TROUGHBARS(K,N,M)表示之字转向ZIG(K,N)的前M个波谷到当前的周期数,M必须大于等于1
    例如:
    TROUGHBARS(2,5,2)表示%5最低价ZIG转向的前2个波谷到当前的周期数
    `,
  },
  {
    label: "WINNER",
    detail: "获利盘比例",
    documentation: `
    获利盘比例.
    用法:
    WINNER(CLOSE),表示以当前收市价卖出的获利盘比例,例如返回0.1表示10%获利盘;WINNER(10.5)表示10.5元价格的获利盘比例
    该函数仅对日线分析周期有效
    `,
  },
  {
    label: "LWINNER",
    detail: "近期获利盘比例",
    documentation: `
    近期获利盘比例.
    用法: LWINNER(5,CLOSE),表示最近5天的那部分成本以当前收市价卖出的获利盘比例
    例如:
    返回0.1表示10%获利盘
    `,
  },
  {
    label: "PWINNER",
    detail: "远期获利盘比例",
    documentation: `
    远期获利盘比例.
    用法: PWINNER(5,CLOSE),表示5天前的那部分成本以当前收市价卖出的获利盘比例
    例如:
    返回0.1表示10%获利盘
    `,
  },
  {
    label: "COSTEX",
    detail: "区间成本",
    documentation: `
    区间成本.
    用法:
    例如COSTEX(CLOSE,REF(CLOSE,1)),表示近两日收盘价格间筹码的成本
    该函数仅对日线分析周期有效
    `,
  },
  {
    label: "PPART",
    detail: "远期成本分布比例",
    documentation: `
    远期成本分布比例.
    用法:
    PPART(10),表示10个周期前的成本占总成本的比例,0.2表示20%
    `,
  },
  {
    label: "ZIG",
    detail: "之字转向(未来函数)",
    documentation: `
    属于未来函数,之字转向.
    用法:
    ZIG(K,N),当价格变化量超过N%时转向,K表示0:开盘价,1:最高价,2:最低价,3:收盘价,其余:数组信息
    例如:
    ZIG(3,5)表示收盘价的5%的ZIG转向
    `,
  },
  {
    label: "ZIGA",
    detail: "之字转向(未来函数)",
    documentation: `
    属于未来函数,之字转向.
    用法:
    ZIGA(K,X),当价格变化超过X时转向,K表示0:开盘价,1:最高价,2:最低价,3:收盘价,其余:数组信息
    例如:
    ZIGA(3,1.5)表示收盘价变化1.5元的ZIGA转向
    `,
  },
  {
    label: "NewSAR",
    detail: "新抛物转向",
    documentation: `
    新抛物转向函数
    用法:
    NewSAR(N,S),N为起始统计天数,S为加速因子
    例如:
    NewSAR(10,2)表示从10日后开始统计,加速因子为2的抛物转向
    `,
  },
  {
    label: "LFS",
    detail: "锁定因子",
    documentation: `
    LFS    返回个股锁定因子
    `,
  },
  {
    label: "INDEXA",
    detail: "大盘的成交额",
    documentation: `
    INDEXA
    返回对应的大盘成交额,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种(持仓量)
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXADV",
    detail: "大盘的上涨家数",
    documentation: `
    INDEXADV  返回对应的上涨家数,分别是上证指数,深证成指,科创50,创业板指
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXDEC",
    detail: "大盘的下跌家数",
    documentation: `
    INDEXDEC  返回对应的下跌家数,分别是上证指数,深证成指,科创50,创业板指
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXC",
    detail: "大盘的收盘价",
    documentation: `
    INDEXC    返回对应的大盘收盘价,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种
    (对应指数的数据必须要先下载到本地) 注:多日线周期(除缺省45日),需要对应数据日期一致
    `,
  },
  {
    label: "INDEXH",
    detail: "大盘的最高价",
    documentation: `
    INDEXH    返回对应的大盘最高价,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXL",
    detail: "大盘的最低价",
    documentation: `
    INDEXL    返回对应的大盘最低价,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXO",
    detail: "大盘的开盘价",
    documentation: `
    INDEXO    返回对应的大盘开盘价,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "INDEXV",
    detail: "大盘的成交量",
    documentation: `
    INDEXV    返回对应的大盘成交量,分别是上证指数,深证成指,科创50,创业板指,港股为恒生指数,国内期货为对应的L9指数品种
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXA",
    detail: "行业指数的成交额",
    documentation: `
    HY_INDEXA    返回对应的行业指数成交额,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXADV",
    detail: "行业指数的上涨家数",
    documentation: `
    HY_INDEXADV  返回对应的行业指数上涨家数,如果没有通达信板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXDEC",
    detail: "行业指数的下跌家数",
    documentation: `
    HY_INDEXDEC  返回对应的行业指数下跌家数,如果没有通达信板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXC",
    detail: "行业指数的收盘价",
    documentation: `
    HY_INDEXC    返回对应的行业指数收盘价,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXH",
    detail: "行业指数的最高价",
    documentation: `
    HY_INDEXH    返回对应的行业指数最高价,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXL",
    detail: "行业指数的最低价",
    documentation: `
    HY_INDEXL    返回对应的行业指数最低价,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXO",
    detail: "行业指数的开盘价",
    documentation: `
    HY_INDEXO    返回对应的行业指数开盘价,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "HY_INDEXV",
    detail: "行业指数的成交量",
    documentation: `
    HY_INDEXV    返回对应的行业指数成交量,如果没有通达信板块指数,港美股没有扩展板块指数,则不支持
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "DPZSCODE",
    detail: "所属的大盘指数的代码",
    documentation: `
    所属的大盘指数的代码.比如: CALCSTOCKINDEX(DPZSCODE,'KDJ',3);
    `,
  },
  {
    label: "DPZSNAME",
    detail: "所属的大盘指数的名称",
    documentation: `
    所属的大盘指数的名称.比如: DRAWTEXT_FIX(ISLASTBAR,0,0,0,DPZSNAME);
    `,
  },
  {
    label: "UNDERCODE",
    detail: "对应标的的代码",
    documentation: `
    返回对应标的的代码,对于股票期权品种和可转债品种等有效.
    比如: CALCSTOCKINDEX(UNDERCODE,'KDJ',3);
    `,
  },
  {
    label: "UNDERLYC",
    detail: "对应标的的收盘价",
    documentation: `
    UNDERLYC 返回对应标的的收盘价,对于股票期权品种和可转债品种等有效
    (对应指数的数据必须要先下载到本地)
    `,
  },
  {
    label: "TRADENUM",
    detail: "总成交单数",
    documentation: `
    TRADENUM
    逐笔成交总单数,沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "TRADEINNUM",
    detail: "逐笔买入成交单数",
    documentation: `
    TRADEINNUM
    逐笔买入成交单数,相当于L2_VOLNUM(0,0)+L2_VOLNUM(1,0),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "TRADEOUTNUM",
    detail: "逐笔卖出成交单数",
    documentation: `
    TRADEOUTNUM
    逐笔卖出成交单数,相当于L2_VOLNUM(0,1)+L2_VOLNUM(1,1),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "LARGETRDINNUM",
    detail: "逐笔买入大单成交单数",
    documentation: `
    LARGETRDINNUM
    逐笔买入大单成交单数,相当于L2_VOLNUM(0,0),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "LARGETRDOUTNUM",
    detail: "逐笔卖出大单成交单数",
    documentation: `
    LARGETRDOUTNUM
    逐笔卖出大单成交单数,相当于L2_VOLNUM(0,1),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "L2_VOLNUM",
    detail: "单数分档",
    documentation: `
    L2_VOLNUM(N,M)
    单数分档,按: N(0--1):(超大+大)/(中+小),M(0--1):买/卖二类,沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "L2_VOL",
    detail: "成交量分档",
    documentation: `
    L2_VOL(N,M)
    成交量分档,按: N(0--3):超大/大/中/小四档处理,M(0--3):买入/卖出/主买/主卖四类,沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "L2_AMO",
    detail: "成交额分档",
    documentation: `
    L2_AMO(N,M)
    成交额分档,按: N(0--3):超大/大/中/小四档处理,M(0--3):买入/卖出/主买/主卖四类,沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "CUR_BUYORDER",
    detail: "总委买量",
    documentation: `
    CUR_BUYORDER
    总委买量,序列数据,专业版等(资金流向功能)沪深京品种行情专用
    `,
  },
  {
    label: "CUR_SELLORDER",
    detail: "总委卖量",
    documentation: `
    CUR_SELLORDER
    总委卖量,序列数据,专业版等(资金流向功能)沪深京品种行情专用
    `,
  },
  {
    label: "ACTINVOL",
    detail: "主动买成交量",
    documentation: `
    ACTINVOL
    主动买成交量,相当于L2_VOL(0,2)+L2_VOL(1,2)+L2_VOL(2,2)+L2_VOL(3,2),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "ACTOUTVOL",
    detail: "主动卖成交量",
    documentation: `
    ACTOUTVOL
    主动卖成交量,相当于L2_VOL(0,3)+L2_VOL(1,3)+L2_VOL(2,3)+L2_VOL(3,3),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "LARGEINTRDVOL",
    detail: "逐笔买入大单成交量",
    documentation: `
    LARGEINTRDVOL
    逐笔买入大单成交量,相当于L2_VOL(0,0)+L2_VOL(1,0),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "LARGEOUTTRDVOL",
    detail: "逐笔卖出大单成交量",
    documentation: `
    LARGEOUTTRDVOL
    逐笔卖出大单成交量,相当于L2_VOL(0,1)+L2_VOL(1,1),沪深京品种的资金流向,仅日线以上周期,用于特定版本
    `,
  },
  {
    label: "BIDORDERVOL",
    detail: "累计总有效委买量",
    documentation: `
    BIDORDERVOL
    累计总有效委买量,专业版等(资金流向功能)沪深京品种行情专用 累计总有效委买量-累计总有效撤买量=总买+总成交量
    `,
  },
  {
    label: "BIDCANCELVOL",
    detail: "累计总有效撤买量",
    documentation: `
    BIDCANCELVOL
    累计总有效撤买量,专业版等(资金流向功能)沪深京品种行情专用  累计总有效委买量-累计总有效撤买量=总买+总成交量
    `,
  },
  {
    label: "AVGBIDPX",
    detail: "最新委买均价",
    documentation: `
    AVGBIDPX
    专业版等(资金流向功能)沪深京品种行情专用:最新委买均价
    `,
  },
  {
    label: "OFFERORDERVOL",
    detail: "累计总有效委卖量",
    documentation: `
    OFFERORDERVOL
    累计总有效委卖量,专业版等(资金流向功能)沪深京品种行情专用  累计总有效委卖量-累计总有效撤卖量=总卖+总成交量
    `,
  },
  {
    label: "OFFERCANCELVOL",
    detail: "累计总有效撤卖量",
    documentation: `
    OFFERCANCELVOL
    累计总有效撤卖量,专业版等(资金流向功能)沪深京品种行情专用  累计总有效委卖量-累计总有效撤卖量=总卖+总成交量
    `,
  },
  {
    label: "AVGOFFERPX",
    detail: "最新委卖均价",
    documentation: `
    AVGOFFERPX
    专业版等(资金流向功能)沪深京品种行情专用:最新委卖均价
    `,
  },
  {
    label: "PLOYLINE",
    detail: "折线段",
    documentation: `
    绘制折线段.
    用法:
    PLOYLINE(COND,PRICE),当COND条件满足时,以PRICE位置为顶点画折线连接.
    例如:
    PLOYLINE(HIGH>=HHV(HIGH,20),HIGH)表示在创20天新高点之间画折线
    `,
  },
  {
    label: "DRAWLINE",
    detail: "直线段(未来函数)",
    documentation: `
    属于未来函数,绘制直线段.
    用法:
    DRAWLINE(COND1,PRICE1,COND2,PRICE2,EXPAND),当COND1条件满足时,在PRICE1位置画直线起点,当COND2条件满足时,在PRICE2位置画直线终点,EXPAND为1表示是延长类型.
    例如:
    DRAWLINE(HIGH>=HHV(HIGH,20),HIGH,LOW<=LLV(LOW,20),LOW,1)表示在创20天新高与创20天新低之间画直线并且向右延长.
    `,
  },
  {
    label: "DRAWSL",
    detail: "斜线",
    documentation: `
    绘制斜线.
    用法:
    DRAWSL(COND,PRICE,SLOPE,LEN,DIRECT),当COND条件满足时,在PRICE位置画斜线,SLOPE为斜率,LEN为长度,DIRECT为0向右延伸,1向左延伸,2双向延伸.
    注意:
    1.K线间的纵向高度差为SLOPE;
    2.SLOPE为0时,为水平线;
    3.SLOPE为10000时,为垂直线,LEN为向上的像素高度,DIRECT表示向上或向下延伸;
    4.SLOPE和LEN支持变量;
    `,
  },
  {
    label: "DRAWKLINE",
    detail: "K线",
    documentation: `
    DRAWKLINE(HIGH,OPEN,LOW,CLOSE).
    用法:
    以HIGH为最高价,OPEN为开盘价,LOW为最低,CLOSE收盘画K线
    `,
  },
  {
    label: "STICKLINE",
    detail: "柱状线",
    documentation: `
    绘制柱线.
    用法:
    STICKLINE(COND,PRICE1,PRICE2,WIDTH,EMPTY),当COND条件满足时,在PRICE1和PRICE2位置之间画柱状线,宽度为WIDTH(4为标准间距),EMPTY为0画实心柱,-1画虚线空心柱,1画实线空心柱,2从中间向上下画实线柱(满占,PRICE1无用),3从中间向上下画实线柱(半满占,PRICE1无用).
    例如:
    STICKLINE(CLOSE>OPEN,CLOSE,OPEN,0.8,1)表示画K线中阳线的空心柱体部分.
    `,
  },
  {
    label: "DRAWICON",
    detail: "图标",
    documentation: `
    绘制小图标.
    用法:
    DRAWICON(COND,PRICE,TYPE),当COND条件满足时,在PRICE位置画TYPE号图标(TYPE为1--46).
    例如:
    DRAWICON(CLOSE>OPEN,LOW,1)表示当收阳时在最低价位置画1号图标.
    `,
  },
  {
    label: "DRAWTEXT",
    detail: "文字",
    documentation: `
    1.显示文字;2.在指标排序中显示字符串栏目.
    用法:
    DRAWTEXT(COND,PRICE,TEXT),当COND条件满足时,在PRICE位置书写文字TEXT.
    例如:
    DRAWTEXT(CLOSE/OPEN>1.08,LOW,'大阳线')表示当日实体阳线大于8%时在最低价位置显示'大阳线'字样.若文字中含有&,则进行折行.最多只能显示250个字符
    `,
  },
  {
    label: "DRAWTEXT_FIX",
    detail: "定点文字",
    documentation: `
    1.固定位置显示文字;2.在指标排序中显示字符串栏目.
    用法:
    DRAWTEXT_FIX(COND,X,Y,TYPE,TEXT),COND中一般需要加ISLASTBAR,当COND条件满足时,在当前指标窗口内(X,Y)位置书写文字TEXT,X,Y为书写点在窗口中相对于左上角的百分比,TYPE:0为左对齐,1为右对齐.
    例如:
    DRAWTEXT_FIX(ISLASTBAR AND CLOSE/OPEN>1.08,0.5,0.5,0,'大阳线')表示最后一个交易日实体阳线大于8%时在窗口中间位置显示'大阳线'字样.若文字中含有&,则进行折行.最多只能显示250个字符
    `,
  },
  {
    label: "DRAWNUMBER",
    detail: "画数字",
    documentation: `
    画出数字.
    用法:
    DRAWNUMBER(COND,PRICE,NUMBER),当COND条件满足时,在PRICE位置书写数字NUMBER.
    例如:
    DRAWNUMBER(CLOSE/OPEN>1.08,LOW,C)表示当日实体阳线大于8%时在最低价位置显示收盘价.
    `,
  },
  {
    label: "DRAWNUMBER_FIX",
    detail: "画定点数字",
    documentation: `
    固定位置显示数字.
    用法:
    DRAWNUMBER_FIX(COND,X,Y,TYPE,NUMBER),COND中一般需要加ISLASTBAR,当COND条件满足时,在当前指标窗口内(X,Y)位置书写数字NUMBER,X,Y为书写点在窗口中相对于左上角的百分比,TYPE:0为左对齐,1为右对齐.
    例如:
    DRAWNUMBER_FIX(ISLASTBAR AND CLOSE/OPEN>1.08,0.5,0.5,0,C)表示最后一个交易日实体阳线大于8%时在窗口中间位置显示收盘价.
    `,
  },
  {
    label: "RGB",
    detail: "自定色",
    documentation: `
    将自定颜色作为数值输出.
    用法:
    RGB(Red,Green,Blue),输出为0XBBGGRR,参数使用十进制数,范围为0至255,以最近一个周期数值为准.
    例如:
    RGB(0,0,255)输出结果为16进制的0XFF0000.
    `,
  },
  {
    label: "DRAWBAND",
    detail: "画带状线",
    documentation: `
    画出带状线.
    用法:
    DRAWBAND(VAL1,COLOR1,VAL2,COLOR2),当VAL1>VAL2时,在VAL1和VAL2之间填充COLOR1;当VAL1<VAL2时,填充COLOR2,这里的颜色均使用RGB函数计算得到.
    例如:
    DRAWBAND(OPEN,RGB(0,224,224),CLOSE,RGB(255,96,96));
    `,
  },
  {
    label: "DRAWBMP",
    detail: "画图片",
    documentation: `
    画出图片.
    用法:
    DRAWBMP(COND,PRICE,'Bmp文件名'),当条件COND满足时,在PRICE位置画T0002目录下面的signals目录下面的"Bmp文件名";
    例如:
    DRAWBMP(O>C,CLOSE,'高开');
    `,
  },
  {
    label: "DRAWGBK",
    detail: "填充背景",
    documentation: `
    填充背景.
    用法:
    DRAWGBK(COND,COLOR1,COLOR2,是否横向渐进,'BMP或PNG文件名',是否拉升BMP或PNG文件名),当条件COND满足时填充背景,如果COLOR1和COLOR2有一个不为0,则以COLOR1到COLOR2的渐变色为背景,否则画T0002目录下面的signals目录下面的'Bmp或Png文件名'(优先使用BMP文件).
    例如:
    DRAWGBK(ISLASTBAR AND O>C,RGB(0,255,0),RGB(255,0,0),0,'背景图',0);
    `,
  },
  {
    label: "DRAWGBK_DIV",
    detail: "填充部分背景",
    documentation: `
    填充部分背景.
    用法:
    DRAWGBK_DIV(COND,COLOR1,COLOR2,填色方式,填充范围),填充满足COND条件的背景区域
    填色方式:0是上下渐进 1是左右渐进 2是用COLOR1画框线 3是用COLOR1画框线,用COLOR2填充
    填充范围:0为整个区域 1为最高最低区(主图) 2为开盘收盘区(主图) 
    例如:
    DRAWGBK_DIV(C>O,RGB(0,255,0),RGB(255,0,0),0,0);
    `,
  },
  {
    label: "DRAWRECTREL",
    detail: "相对位置上画矩形",
    documentation: `
    相对位置上画矩形.
    用法:
    DRAWRECTREL(LEFT,TOP,RIGHT,BOTTOM,COLOR),以图形窗口(LEFT,TOP)为左上角,(RIGHT,BOTTOM)为右下角绘制矩形,坐标单位是窗口沿水平和垂直方向的1/1000,取值范围是0—999,超出范围则可能显示在图形窗口外,矩形中间填充颜色COLOR,COLOR为0表示不填充.
    例如:
    DRAWRECTREL(0,0,500,500,RGB(255,255,0)),NOFRAME;表示在图形最左上部1/4位置用黄色绘制矩形.NOFRAME表示不加边框
    `,
  },
  {
    label: "SETCODE",
    detail: "市场类型",
    documentation: `
    SETCODE 市场类型
    0:深圳 1:上海 2:北京 47:中金所期货 28:郑州商品 29:大连商品 30:上海商品,27:香港指数 31:香港主板,48:香港创业板...
    `,
  },
  {
    label: "MINDIFF",
    detail: "最小变动价位",
    documentation: `
    MINDIFF  返回某品种的最小变动价位(也是交易价格的最小间隔单位)
    `,
  },
  {
    label: "MULTIPLIER",
    detail: "期货每手乘数",
    documentation: `
    MULTIPLIER  期货每手乘数
    `,
  },
  {
    label: "TQFLAG",
    detail: "当前的复权状态",
    documentation: `
    TQFLAG  当前的复权状态,0:无复权 1:前复权 2:后复权
    `,
  },
  {
    label: "USEDDATANUM",
    detail: "当前使用的数据个数",
    documentation: `
    USEDDATANUM  当前使用的数据个数
    `,
  },
  {
    label: "LOCALDAYNUM",
    detail: "[新]本地日线数据个数",
    documentation: `
    LOCALDAYNUM  客户端本地已下载的该品种的日线数据个数(含当日)
    `,
  },
  {
    label: "TOTALCAPITAL",
    detail: "当前总股本(手)",
    documentation: `
    TOTALCAPITAL  当前总股本,单位为手,债券1手为10张,其它为100
    `,
  },
  {
    label: "CAPITAL",
    detail: "当前流通股本(手)",
    documentation: `
    CAPITAL  当前流通股本,单位为手,债券1手为10张,其它为100
    `,
  },
  {
    label: "FINANCE(1)",
    detail: "总股本(股)",
    documentation: `
    FINANCE(1) 总股本(随时间可能有变化)
    `,
  },
  {
    label: "FINANCE(2)",
    detail: "市场类型",
    documentation: `
    FINANCE(2) 用法同SETCODE
    `,
  },
  {
    label: "FINANCE(3)",
    detail: "沪深京品种类型",
    documentation: `
    FINANCE(3) 沪深京品种类型
    0:指数,1:A股主板,2:北证A股,3:创业板,4:科创板,5:B股,6:债券,7:基金,8:权证,9:其它,10:非沪深京品种
    `,
  },
  {
    label: "FINANCE(4)",
    detail: "沪深京行业代码",
    documentation: `
    FINANCE(4) 沪深京品种行业代码(二级)
    `,
  },
  {
    label: "FINANCE(5)",
    detail: "B股",
    documentation: `
    FINANCE(5) B股
    `,
  },
  {
    label: "FINANCE(6)",
    detail: "H股",
    documentation: `
    FINANCE(6) H股
    `,
  },
  {
    label: "FINANCE(7)",
    detail: "流通股本(股)",
    documentation: `
    FINANCE(7)  流通股本(随时间可能有变化)
    `,
  },
  {
    label: "FINANCE(8)",
    detail: "股东人数(户)",
    documentation: `
    FINANCE(8)  股东人数(户)(上市公司的最新数据)
    `,
  },
  {
    label: "FINANCE(9)",
    detail: "资产负债率%",
    documentation: `
    FINANCE(9)  资产负债率
    即:(总资产-净资产-少数股东权益)/总资产*100,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(10)",
    detail: "总资产",
    documentation: `
    FINANCE(10) 总资产,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(11)",
    detail: "流动资产",
    documentation: `
    FINANCE(11) 流动资产,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(12)",
    detail: "固定资产",
    documentation: `
    FINANCE(12) 固定资产,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(13)",
    detail: "无形资产",
    documentation: `
    FINANCE(13) 无形资产,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(15)",
    detail: "流动负债",
    documentation: `
    FINANCE(15) 流动负债,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(16)",
    detail: "少数股东权益",
    documentation: `
    FINANCE(16) 少数股东权益,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(17)",
    detail: "资本公积金",
    documentation: `
    FINANCE(17) 资本公积金,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(18) ",
    detail: "每股公积金",
    documentation: `
    FINANCE(18)  每股公积金,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(19)",
    detail: "股东权益(净资产)",
    documentation: `
    FINANCE(19) 股东权益(净资产),上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(20)",
    detail: "营业收入",
    documentation: `
    FINANCE(20) 营业收入,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(21)",
    detail: "营业成本",
    documentation: `
    FINANCE(21) 营业成本,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(22)",
    detail: "应收帐款",
    documentation: `
    FINANCE(22) 应收帐款,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(23)",
    detail: "营业利润",
    documentation: `
    FINANCE(23) 营业利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(24)",
    detail: "投资收益",
    documentation: `
    FINANCE(24) 投资收益,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(25)",
    detail: "经营现金流量",
    documentation: `
    FINANCE(25) 经营现金流量,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(26)",
    detail: "总现金流量",
    documentation: `
    FINANCE(26) 总现金流量,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(27)",
    detail: "存货",
    documentation: `
    FINANCE(27) 存货,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(28)",
    detail: "利润总额",
    documentation: `
    FINANCE(28) 利润总额,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(29)",
    detail: "税后利润",
    documentation: `
    FINANCE(29) 税后利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(30)",
    detail: "归母净利润",
    documentation: `
    FINANCE(30) 归母净利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(31)",
    detail: "未分配利润",
    documentation: `
    FINANCE(31) 未分配利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(32)",
    detail: "每股未分配利润",
    documentation: `
    FINANCE(32)  每股未分配利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(33)",
    detail: "每股收益(全年折算)",
    documentation: `
    FINANCE(33)  每股收益(折算为全年收益),对于沪深京品种有效
    `,
  },
  {
    label: "FINANCE(34)",
    detail: "每股净资产",
    documentation: `
    FINANCE(34)  每股净资产,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(35)",
    detail: "季报调整净资产",
    documentation: `
    FINANCE(35) 季报中调整后的每股净资产(如果没有调整过,则为0),上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(36)",
    detail: "股东权益比",
    documentation: `
    FINANCE(36)  股东权益比,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(37)",
    detail: "第几期季度报告",
    documentation: `
    FINANCE(37)  第几期季度报告,1为一季报,2为中报,3为三季报,4为年报,对于沪深京品种有效
    `,
  },
  {
    label: "FINANCE(38)",
    detail: "每股收益(最近一期)",
    documentation: `
    FINANCE(38)  每股收益,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(39)",
    detail: "总市值",
    documentation: `
    FINANCE(39)  总市值(包括在香港等地上市的股份市值,按同市场报价汇总)
    `,
  },
  {
    label: "FINANCE(40)",
    detail: "流通市值",
    documentation: `
    FINANCE(40)  流通市值
    `,
  },
  {
    label: "FINANCE(41)",
    detail: "AB股总市值",
    documentation: `
    FINANCE(41)  AB股总市值(不包括在香港等地上市的股份市值)
    `,
  },
  {
    label: "FINANCE(42)",
    detail: "上市的天数",
    documentation: `
    FINANCE(42)  上市的天数
    `,
  },
  {
    label: "FINANCE(43)",
    detail: "利润同比%",
    documentation: `
    FINANCE(43)  净利润同比增长率,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(44)",
    detail: "收入同比%",
    documentation: `
    FINANCE(44)  收入同比增长率,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(45)",
    detail: "股息率%",
    documentation: `
    FINANCE(45)  股息率
    `,
  },
  {
    label: "FINANCE(46)",
    detail: "自由流通股本(股)",
    documentation: `
    FINANCE(46)  自由流通股本(股) 流通股本中减去占5%以上股份的部分
    `,
  },
  {
    label: "FINANCE(48)",
    detail: "是否为陆通股标的",
    documentation: `
    FINANCE(48)  是否为陆通股标的
    `,
  },
  {
    label: "FINANCE(49)",
    detail: "今日权息标识",
    documentation: `
    FINANCE(49)  今日权息标识 0:无 1:分红 2:送转股 3:分红+送转股 4:配股
    `,
  },
  {
    label: "FINANCE(50)",
    detail: "是否属于沪深300",
    documentation: `
    FINANCE(50)  是否属于沪深300
    `,
  },
  {
    label: "FINANCE(51)",
    detail: "是否含可转债",
    documentation: `
    FINANCE(51)  是否含可转债
    `,
  },
  {
    label: "FINANCE(52)",
    detail: "是否为融资融券标的",
    documentation: `
    FINANCE(52)  是否为融资融券标的
    `,
  },
  {
    label: "FINANCE(53)",
    detail: "每股股息(港股,美股)",
    documentation: `
    FINANCE(53) 每股股息(港股,美股)
    `,
  },
  {
    label: "FINANCE(54)",
    detail: "扣非净利润",
    documentation: `
    FINANCE(54) 扣非净利润,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(55)",
    detail: "研发费用",
    documentation: `
    FINANCE(55) 研发费用,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(56)",
    detail: "员工人数",
    documentation: `
    FINANCE(56) 员工人数,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(57)",
    detail: "货币资金",
    documentation: `
    FINANCE(57) 货币资金,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(58)",
    detail: "合同负债",
    documentation: `
    FINANCE(58) 合同负债,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(59)",
    detail: "其它权益工具",
    documentation: `
    FINANCE(59) 其它权益工具,上市公司最近一期财报数据
    `,
  },
  {
    label: "FINANCE(60)",
    detail: "行权比例(权证,期权)",
    documentation: `
    FINANCE(60)  行权比例(权证,期权)
    `,
  },
  {
    label: "FINANCE(61)",
    detail: "行权价(权证,期权)",
    documentation: `
    FINANCE(61)  行权价(权证,期权)
    `,
  },
  {
    label: "FINANCE(62)",
    detail: "杠杆比率(权证,期权)",
    documentation: `
    FINANCE(62)  杠杆比率(权证,期权),实际杠杆比率为FINANCE(62)*FINANCE(68)
    `,
  },
  {
    label: "FINANCE(63)",
    detail: "内在价值(权证,期权)",
    documentation: `
    FINANCE(63)  内在价值(权证,期权)
    `,
  },
  {
    label: "FINANCE(64)",
    detail: "溢价率(权证,期权)",
    documentation: `
    FINANCE(64)  溢价率(权证,期权)
    `,
  },
  {
    label: "FINANCE(65)",
    detail: "时间价值(权证,期权)",
    documentation: `
    FINANCE(65)  时间价值(权证,期权)
    `,
  },
  {
    label: "FINANCE(66)",
    detail: "剩余天数(期货,期权)",
    documentation: `
    FINANCE(66)  剩余天数(期货,期权)
    `,
  },
  {
    label: "FINANCE(67)",
    detail: "合约乘数(期权)",
    documentation: `
    FINANCE(67)  合约乘数(期权)
    `,
  },
  {
    label: "FINANCE(68)",
    detail: "Delta对冲值(权证,期权)",
    documentation: `
    FINANCE(68)  Delta对冲值(权证,期权)
    `,
  },
  {
    label: "FINANCE(69)",
    detail: "认购认沽类型(股票期权)",
    documentation: `
    FINANCE(69)  认购认沽类型(股票期权),0表示是认购,1表示是认沽
    `,
  },
  {
    label: "FINANCE(80)",
    detail: "最近财报公告离现在的天数",
    documentation: `
    FINANCE(80)  最近财报公告离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(81)",
    detail: "最后涨停板离现在的天数",
    documentation: `
    FINANCE(81)  最后涨停板离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(82)",
    detail: "最后跌停板离现在的天数",
    documentation: `
    FINANCE(82)  最后跌停板离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(83)",
    detail: "最后上榜离现在的天数",
    documentation: `
    FINANCE(83)  最后上榜离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(84)",
    detail: "最近停牌离现在的天数",
    documentation: `
    FINANCE(84)  最近停牌离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(85)",
    detail: "最近业绩预告离现在的天数",
    documentation: `
    FINANCE(85)  最近业绩预告离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(86)",
    detail: "最近股份解禁离现在的天数",
    documentation: `
    FINANCE(86)  最近股份解禁离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(87)",
    detail: "最近定增股上市离现在的天数",
    documentation: `
    FINANCE(87)  最近定增股上市离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(88)",
    detail: "[新]最近北上大额增仓日离现在的天数",
    documentation: `
    FINANCE(88)  最近北上大额增仓日离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(89)",
    detail: "[新]最近北上大额减仓日离现在的天数",
    documentation: `
    FINANCE(89)  最近北上大额减仓日离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(90)",
    detail: "[新]最近回购预案日离现在的天数",
    documentation: `
    FINANCE(90)  最近回购预案日离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "FINANCE(91)",
    detail: "[新]最近股权激励预案日离现在的天数",
    documentation: `
    FINANCE(91)  最近股权激励预案日离现在的自然日天数,仅用于PC客户端
    `,
  },
  {
    label: "SAFESCORE",
    detail: "安全分",
    documentation: `
    SAFESCORE  安全分(0-100),通达信扫雷宝数据,仅供参考
    `,
  },
  {
    label: "DYNAINFO(3)",
    detail: "昨收盘价",
    documentation: `
    DYNAINFO(3)  昨收盘价 即时行情数据 期货和期权品种为昨结算价
    `,
  },
  {
    label: "DYNAINFO(4)",
    detail: "开盘价",
    documentation: `
    DYNAINFO(4)  开盘价 即时行情数据 在开盘前,值为0,在使用时需要判断(否则分时指标时会影响纵坐标轴)
    `,
  },
  {
    label: "DYNAINFO(5)",
    detail: "最高价",
    documentation: `
    DYNAINFO(5)  最高价 即时行情数据 在开盘前,值为0,在使用时需要判断(否则分时指标时会影响纵坐标轴)
    `,
  },
  {
    label: "DYNAINFO(6)",
    detail: "最低价",
    documentation: `
    DYNAINFO(6)  最低价 即时行情数据 在开盘前,值为0,在使用时需要判断(否则分时指标时会影响纵坐标轴)
    `,
  },
  {
    label: "DYNAINFO(7)",
    detail: "现价",
    documentation: `
    DYNAINFO(7)  现价 即时行情数据 在开盘前,值为0,在使用时需要判断(否则分时指标时会影响纵坐标轴)
    `,
  },
  {
    label: "DYNAINFO(8)",
    detail: "总量",
    documentation: `
    DYNAINFO(8) 总量 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(9)",
    detail: "现量",
    documentation: `
    DYNAINFO(9) 现量 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(10)",
    detail: "总金额",
    documentation: `
    DYNAINFO(10)  总金额 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(11)",
    detail: "均价",
    documentation: `
    DYNAINFO(11) 均价 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(12)",
    detail: "日涨跌",
    documentation: `
    DYNAINFO(12) 日涨跌 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(13)",
    detail: "振幅",
    documentation: `
    DYNAINFO(13) 振幅 即时行情数据 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(14)",
    detail: "涨幅",
    documentation: `
    DYNAINFO(14) 涨幅 即时行情数据(沪深京早盘竞价期间使用匹配价的涨幅) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(15)",
    detail: "开盘金额",
    documentation: `
    DYNAINFO(15) 开盘时的成交金额 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(16)",
    detail: "前5日每分钟均量",
    documentation: `
    DYNAINFO(16) 前5日每分钟均量 盘中不变化
    `,
  },
  {
    label: "DYNAINFO(17)",
    detail: "量比",
    documentation: `
    DYNAINFO(17) 量比 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(18)",
    detail: "上涨家数",
    documentation: `
    DYNAINFO(18) 上涨家数(对沪深指数和通达信板块指数有效) 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(19)",
    detail: "下跌家数",
    documentation: `
    DYNAINFO(19) 下跌家数(对沪深指数和通达信板块指数有效) 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(20)",
    detail: "买价(即买一价)",
    documentation: `
    DYNAINFO(20)  最新买价 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(21)",
    detail: "卖价(即卖一价)",
    documentation: `
    DYNAINFO(21)  最新卖价 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(22)",
    detail: "内盘/板块指数跌停数",
    documentation: `
    DYNAINFO(22) 返回内盘,板块指数则返回跌停家数 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(23)",
    detail: "外盘/板块指数涨停数",
    documentation: `
    DYNAINFO(23) 返回外盘,板块指数则返回涨停家数 即时行情数据
    `,
  },
  {
    label: "SELLVOL",
    detail: "内盘",
    documentation: `
    返回内盘,即DYNAINFO(22) 即时行情数据
    `,
  },
  {
    label: "BUYVOL",
    detail: "外盘",
    documentation: `
    返回外盘,即DYNAINFO(23) 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(24) ",
    detail: "涨速",
    documentation: `
    DYNAINFO(24) 返回涨速 报价界面行情数据 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(25)",
    detail: "几分钟前的价格",
    documentation: `
    DYNAINFO(25) 返回几分钟前的价格,周期由涨速周期决定,一般为5分钟 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(26)",
    detail: "涨停价",
    documentation: `
    DYNAINFO(26) 返回涨停价 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(27)",
    detail: "跌停价",
    documentation: `
    DYNAINFO(27) 返回跌停价 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(34)",
    detail: "昨日涨幅",
    documentation: `
    DYNAINFO(34) 昨日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    比如计算前天的收盘价:DYNAINFO(3)/(1+DYNAINFO(34));
    `,
  },
  {
    label: "DYNAINFO(36)",
    detail: "[新]换手率Z",
    documentation: `
    DYNAINFO(36) 自由流通换手率(序列数据,每个周期的数据不同,使用最新的自由流通股本) 转换成幅度需要乘100 比如DYNAINFO(38)>0.25表示换手超过25%
    `,
  },
  {
    label: "DYNAINFO(37)",
    detail: "换手率",
    documentation: `
    DYNAINFO(37) 换手率(序列数据,每个周期的数据不同,使用的流通股本为最近数据) 转换成幅度需要乘100 比如DYNAINFO(37)>0.1表示换手超过10%
    `,
  },
  {
    label: "DYNAINFO(38)",
    detail: "市盈(静)",
    documentation: `
    DYNAINFO(38) 静态市盈率 沪深京,港股和美股品种等有效
    `,
  },
  {
    label: "DYNAINFO(39)",
    detail: "市盈(动)",
    documentation: `
    DYNAINFO(39) 动态市盈率 即时行情数据 沪深京品种有效
    `,
  },
  {
    label: "DYNAINFO(40) ",
    detail: "市盈(TTM)",
    documentation: `
    DYNAINFO(40) 市盈率(根据最近12个月的每股收益得到的市盈率) 即时行情数据 沪深京品种有效
    `,
  },
  {
    label: "DYNAINFO(49)",
    detail: "成交方向",
    documentation: `
    DYNAINFO(49) 成交方向 即时行情数据 0:主动买 1:主动卖 2:中性单
    `,
  },
  {
    label: "DYNAINFO(50)",
    detail: "采样点数(分笔数)",
    documentation: `
    DYNAINFO(50)  采样点数,即分时成交明细个数,相当于报价中的活跃度 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(51)",
    detail: "内外比",
    documentation: `
    DYNAINFO(51) 内外比 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(52)",
    detail: "港股资金流向",
    documentation: `
    DYNAINFO(52) 港股资金流向(根据当前股票内外盘统计) 单位为万 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(53)",
    detail: "应计利息/昨净值",
    documentation: `
    DYNAINFO(53) 应计利息/某些基金的昨日净值(100份) 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(54) ",
    detail: "IOPV",
    documentation: `
    DYNAINFO(54) 某些基金的单位净值 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(55)",
    detail: "基金估算涨幅%",
    documentation: `
    DYNAINFO(55) 开放式基金的估算涨幅% 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(57)",
    detail: "笔涨跌",
    documentation: `
    DYNAINFO(57) 笔涨跌 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(58)",
    detail: "买量(即买一量)",
    documentation: `
    DYNAINFO(58)  最新叫买量 即时行情数据 如果是早盘或尾盘期间,买一量为匹配量或盘后定价交易盘口量,用此函数预警时请注意
    `,
  },
  {
    label: "DYNAINFO(59)",
    detail: "卖量(即卖一量)",
    documentation: `
    DYNAINFO(59)  最新叫卖量 即时行情数据 如果是早盘或尾盘期间,卖一量为匹配量或盘后定价交易盘口量,用此函数预警时请注意
    `,
  },
  {
    label: "DYNAINFO(60)",
    detail: "沪深总上涨家数",
    documentation: `
    DYNAINFO(60) 沪深总上涨家数 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(61)",
    detail: "沪深总下跌家数",
    documentation: `
    DYNAINFO(61) 沪深总下跌家数 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(62)",
    detail: "沪深总成交金额",
    documentation: `
    DYNAINFO(62) 沪深总成交金额 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(63)",
    detail: "3日涨幅",
    documentation: `
    DYNAINFO(63) 3日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(64)",
    detail: "5日涨幅",
    documentation: `
    DYNAINFO(64) 5日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(65)",
    detail: "10日涨幅",
    documentation: `
    DYNAINFO(65) 10日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(66)",
    detail: "20日涨幅",
    documentation: `
    DYNAINFO(66) 20日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(67)",
    detail: "60日涨幅",
    documentation: `
    DYNAINFO(67) 60日涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(68)",
    detail: "年初至今涨幅",
    documentation: `
    DYNAINFO(68) 年初至今涨幅(对沪深京,沪深指数和通达信板块指数有效) 转换成幅度需要乘100
    `,
  },
  {
    label: "DYNAINFO(71)",
    detail: "买二价",
    documentation: `
    DYNAINFO(71)  买二价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(72)",
    detail: "买二量",
    documentation: `
    DYNAINFO(72)  买二量 如果是早盘或尾盘竞价期间,可能为匹配量,用此函数预警时请注意 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(73)",
    detail: "卖二价",
    documentation: `
    DYNAINFO(73)  卖二价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(74)",
    detail: "卖二量",
    documentation: `
    DYNAINFO(74)  卖二量 如果是早盘或尾盘竞价期间,可能为匹配量,用此函数预警时请注意 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(75)",
    detail: "买三价",
    documentation: `
    DYNAINFO(75)  买三价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(76)",
    detail: "买三量",
    documentation: `
    DYNAINFO(76)  买三量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(77)",
    detail: "卖三价",
    documentation: `
    DYNAINFO(77)  卖三价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(78)",
    detail: "卖三量",
    documentation: `
    DYNAINFO(78)  卖三量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(79)",
    detail: "买四价",
    documentation: `
    DYNAINFO(79)  买四价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(80)",
    detail: "买四量",
    documentation: `
    DYNAINFO(80)  买四量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(81)",
    detail: "卖四价",
    documentation: `
    DYNAINFO(81)  卖四价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(82)",
    detail: "卖四量",
    documentation: `
    DYNAINFO(82)  卖四量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(83)",
    detail: "买五价",
    documentation: `
    DYNAINFO(83)  买五价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(84)",
    detail: "买五量",
    documentation: `
    DYNAINFO(84)  买五量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(85)",
    detail: "卖五价",
    documentation: `
    DYNAINFO(85)  卖五价 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(86)",
    detail: "卖五量",
    documentation: `
    DYNAINFO(86)  卖五量 个股界面的指标或TCI后台使用
    `,
  },
  {
    label: "DYNAINFO(88)",
    detail: "封单额",
    documentation: `
    DYNAINFO(88) 涨停或跌停时的实时封单额 如果>0表示是涨停状态 <0表示是跌停状态 即时行情数据
    `,
  },
  {
    label: "DYNAINFO(89)",
    detail: "年涨停天数",
    documentation: `
    DYNAINFO(89) 年涨停天数(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(90)",
    detail: "连板天数",
    documentation: `
    DYNAINFO(90) 连板天数(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(91)",
    detail: "几天",
    documentation: `
    DYNAINFO(91) 几天几板的统计天数(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(92)",
    detail: "几板",
    documentation: `
    DYNAINFO(92) 几天几板的涨停天数(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(93) ",
    detail: "[新]昨成交额",
    documentation: `
    DYNAINFO(93) 昨成交额(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(94)",
    detail: "[新]3日成交额",
    documentation: `
    DYNAINFO(94) 最近3日成交额(对沪深京有效)
    `,
  },
  {
    label: "DYNAINFO(95)",
    detail: "[新]昨封单额",
    documentation: `
    DYNAINFO(95) 昨封单额(对沪深京有效),若为负值,表示昨日为跌停状态
    `,
  },
  {
    label: "DYNAINFO(96)",
    detail: "[新]前封单额",
    documentation: `
    DYNAINFO(96) 前日封单额(对沪深京有效),若为负值,表示前日为跌停状态
    `,
  },
  {
    label: "DYNAINFO(99)",
    detail: "[新]主买净额",
    documentation: `
    DYNAINFO(99) 按主动性口径统计的净流入额(对沪深有效).报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(100)",
    detail: "[新]主力净额",
    documentation: `
    DYNAINFO(100) 按主力口径统计的净流入额(对沪深有效).报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(101)",
    detail: "[新]量涨速",
    documentation: `
    DYNAINFO(101) 量涨速(对沪深京有效),周期由涨速周期决定,一般为5分钟.报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(102)",
    detail: "[新]分钟换手率",
    documentation: `
    DYNAINFO(102) 分钟换手率(对沪深京有效),周期由涨速周期决定,一般为5分钟.报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(103)",
    detail: "[新]2分钟金额",
    documentation: `
    DYNAINFO(103) 2分钟金额(对沪深京有效).报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(104)",
    detail: "[新]开盘抢筹",
    documentation: `
    DYNAINFO(104) 开盘抢筹幅度(对沪深京有效).报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(105)",
    detail: "[新]委比",
    documentation: `
    DYNAINFO(105) 委比(对沪深京有效).报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(106)",
    detail: "[新]总委买量",
    documentation: `
    DYNAINFO(106) 当前总委买量(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(107)",
    detail: "[新]总委卖量",
    documentation: `
    DYNAINFO(107) 当前总委卖量(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(108)",
    detail: "[新]总撤买量",
    documentation: `
    DYNAINFO(108) 当前总撤买量(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(109)",
    detail: "[新]总撤卖量",
    documentation: `
    DYNAINFO(109) 当前总撤卖量(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(110)",
    detail: "[新]L2逐笔成交数",
    documentation: `
    DYNAINFO(110) L2逐笔成交数(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "DYNAINFO(111)",
    detail: "[新]L2逐笔委托数",
    documentation: `
    DYNAINFO(111) L2逐笔委托数(对沪深有效).Level2报价界面行情数据,需通达信行情后台数据支持
    `,
  },
  {
    label: "MAINZSHQ",
    detail: "[新]主要指数行情",
    documentation: `
    MAINZSHQ(M,N) 主要指数行情
    M:0:当前品种所属指数 1:上证指数 2:深圳成指 3:创业板指 4:科创50指数 N:0现价 1:昨收 2:今开 3:最高 4:最低 5:成交额 6:上涨家数 7:下跌家数 8:涨幅 9:3日涨幅
    `,
  },
  {
    label: "ISBUYORDER",
    detail: "主动性买单",
    documentation: `
    返回当前成交是否为主动性买单.
    用法:
    ISBUYORDER
    当本笔成交为主动性买盘时,返回1,否则为0
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "SHAPE_SHORT",
    detail: "短期形态值",
    documentation: `
    返回当前品种的短期形态值(1,2,..14)
    1.倒V型反转 2.V型反转 3.W底 4.M顶 5.盘整 6.盘整后上行 7.盘整后下跌 8.上升通道 9.下降通道 10.拐头下跌 11.拐头上升 12.上行盘整 13.下跌盘整 14.其它形态
    `,
  },
  {
    label: "SHAPE_MID",
    detail: "中期形态值",
    documentation: `
    返回当前品种的中期形态值(1,2,..14)
    1.倒V型反转 2.V型反转 3.W底 4.M顶 5.盘整 6.盘整后上行 7.盘整后下跌 8.上升通道 9.下降通道 10.拐头下跌 11.拐头上升 12.上行盘整 13.下跌盘整 14.其它形态
    `,
  },
  {
    label: "SHAPE_LONG",
    detail: "长期形态值",
    documentation: `
    返回当前品种的长期形态值(1,2,..14)
    1.倒V型反转 2.V型反转 3.W底 4.M顶 5.盘整 6.盘整后上行 7.盘整后下跌 8.上升通道 9.下降通道 10.拐头下跌 11.拐头上升 12.上行盘整 13.下跌盘整 14.其它形态
    `,
  },
  {
    label: "SGN",
    detail: "求符号值",
    documentation: `
    求符号值.
    SGN(X),当X>0,X=0,X<0分别返回1,0,-1
    `,
  },
  {
    label: "ORDERBUY",
    detail: "委托买入",
    documentation: `
    委托买入.此函数只适用于服务器端特定版本的策略交易模式下.
    用法:
    ORDERBUY(condition, volumetype, volume, pricetype, price).
    `,
  },
  {
    label: "ORDERSELL",
    detail: "委托卖出",
    documentation: `
    委托卖出.此函数只适用于服务器端特定版本的策略交易模式下.
    用法:
    ORDERSELL(condition, volumetype, volume, pricetype, price).
    `,
  },
  {
    label: "CANSELLGP",
    detail: "可卖数量",
    documentation: `
    返回可卖数量.此函数只适用于服务器端特定版本的策略交易模式下.
    用法:
    CANSELL
    `,
  },
  {
    label: "CANUSEMONEY",
    detail: "可用资金",
    documentation: `
    返回可用资金.此函数只适用于服务器端特定版本的策略交易模式下.
    用法:
    CANUSE
    `,
  },
  {
    label: "BUY",
    detail: "买入开仓",
    documentation: `
    多头建仓(买入开仓).
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    BUY(CROSS(A,B),LOW),当A上穿B时,在LOW处画标记,同时突出提示或直接下单,如果LOW改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "SELL",
    detail: "卖出平仓",
    documentation: `
    多头平仓(卖出平仓).
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    SELL(CROSS(A,B),HIGH),当A上穿B时,在HIGH处画标记,同时突出提示或直接下单,如果HIGH改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "SELLSHORT",
    detail: "卖出开仓",
    documentation: `
    空头建仓(卖出开仓).
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    SELLSHORT(CROSS(A,B),HIGH),当A上穿B时,在HIGH处画标记,同时突出提示或直接下单,如果HIGH改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "BUYSHORT",
    detail: "买入平仓",
    documentation: `
    空头平仓(买入平仓).
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    BUYSHORT(CROSS(A,B),LOW),当A上穿B时,在LOW处画标记,同时突出提示或直接下单,如果LOW改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "BUYSHORT_BUY",
    detail: "先平空仓再开多仓",
    documentation: `
    先平空仓再开多仓.
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    BUYSHORT_BUY(CROSS(A,B),LOW),当A上穿B时,在LOW处画标记,同时突出提示或直接下单,如果LOW改为DRAWNULL,就不画标记.(分时图上不支持)
    独立池时,反手时平掉所有的原来仓位
    `,
  },
  {
    label: "SELL_SELLSHORT",
    detail: "先平多仓再开空仓",
    documentation: `
    先平多仓再开空仓.
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    SELL_SELLSHORT(CROSS(A,B),HIGH),当A上穿B时,在HIGH处画标记,同时突出提示或直接下单,如果HIGH改为DRAWNULL,就不画标记.(分时图上不支持)
    独立池时,反手时平掉所有的原来仓位
    `,
  },
  {
    label: "CLOSEALLD",
    detail: "清多头仓",
    documentation: `
    平掉所有多头仓位.
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    CLOSEALLD(CROSS(A,B),HIGH),当A上穿B时,在HIGH处画标记,同时突出提示或直接下单,如果HIGH改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "CLOSEALLK",
    detail: "清空头仓",
    documentation: `
    平掉所有空头仓位.
    参数1为触发条件,参数2为标记放置位置.此函数只适用于特定版本交易模式下.
    例如:
    CLOSEALLK(CROSS(A,B),LOW),当A上穿B时,在LOW处画标记,同时突出提示或直接下单,如果LOW改为DRAWNULL,就不画标记.(分时图上不支持)
    `,
  },
  {
    label: "AUTOFILTER",
    detail: "自动过滤交易信号",
    documentation: `
    对交易信号(BUY,SELL,SELLSHORT,BUYSHORT,BUYSHORT_BUY,SELL_SELLSHORT,CLOSEALLD,CLOSEALLK等)按照开平配对原则过滤.
    1.连续的同方向指令只有第一个有效,其他的将被过滤;
    2.交易信号必须配对出现(比如前面已经有了买开指令,则后面只允许出现卖平指令,其他的指令都被过滤掉)
    注:使用AUTOFILTER后,就不要再使用其它的信号过滤方式了.此函数只适用于特定版本交易模式下.
    `,
  },
  {
    label: "ISLASTBUY",
    detail: "上个信号是否买入开仓",
    documentation: `
    上个信号是否买入开仓
    此函数只适用于特定版本交易模式下.(此函数会逐K线计算,请勿与未来函数同时使用)
    `,
  },
  {
    label: "ISLASTSELL",
    detail: "上个信号是否卖出平仓",
    documentation: `
    上个信号是否卖出平仓
    此函数只适用于特定版本交易模式下.(此函数会逐K线计算,请勿与未来函数同时使用)
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
  {
    label: "BETAVALUE",
    detail: "贝塔系数",
    documentation: `
    返回当前品种的贝塔系数
    `,
  },
];
