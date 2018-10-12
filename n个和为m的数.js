// 从数组中，取出n个和为m的数

// 思路很简单
// 1. 过滤一遍数组，将大于目标和的数去掉，此时数组里的数都是小于等于目标和m的数
// 2. 求组合，C（length, n），得到所有可能，然后依次判断每种可能是否符合条件

// 核心是，如何求从x个数里取n个数的所有组合，这里利用的递归加循环的方式

/**
 * 
 * @param {Array} array 
 * @param {Number} sum 和
 * @param {Number} tolerance 和的误差范围
 * @param {Number} targetCount 取几个数
 */
function getCombBySum(array, sum, tolerance, targetCount) {
  var util = {
    /*
      get combination from array
      arr: target array
      num: combination item length
      return: one array that contain combination arrays
    */
    /*获取所有的可能组合
    如果是[1,2,3,4,5]取出3个 
    那么可能性就有10种 C(5,3)= C(5,2) 不懂的恶补高二数学排列😄
    不用翻书了 给个公式 
    全排列  P(n,m)=n!/(n-m)!
    组合排列 C(5,2)=5!/2!*3!=5*4*3*2*1/[(2*1)*(3*2*1)]=10
    这是使用了循环加递归做出了组合排序
    */
    getCombination: function (arr, num) {
      var r = [];
      (function f(t, a, n) {
        if (n == 0) {
          return r.push(t);
        }
        for (var i = 0, l = a.length; i <= l - n; i++) {
          f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
      })([], arr, num);
      return r;
    },
    // 获取数组的索引
    getArrayIndex: function (array) {
      var i = 0,
        r = [];
      for (i = 0; i < array.length; i++) {
        r.push(i);
      }

      return r;
    }
  }

  var logic = {

    // 获取数组中比sum小的数
    init: function (array, sum) {
      // 克隆数组
      var _array = array.concat(),
        r = [],
        i = 0;
      // 从小到大排序
      _array.sort(function (a, b) {
        return a - b;
      });
      // 从数组里找出比目标和小的数，全部放到r里，返回这个数组
      for (i = 0; i < _array.length; i++) {
        if (_array[i] <= sum) {
          r.push(_array[i]);
        } else {
          break;
        }
      }

      return r;
    },
    // 传参，比目标和小的数组，目标和，数组的索引，要求的数目，空数组result
    core: function (array, sum, arrayIndex, count, r) {
      var i = 0,
        k = 0,
        combArray = [],
        _sum = 0,
        _cca = [],
        _cache = [];

      if (count == _returnMark) {
        return;
      }
      //get current count combination
      //这里排序的不是原来的数组,而是求的索引后的数组
      combArray = util.getCombination(arrayIndex, count);
      // console.log(combArray)
      for (i = 0; i < combArray.length; i++) {
        _cca = combArray[i];
        _sum = 0;
        _cache = [];
        // 计算每一组的和
        for (k = 0; k < _cca.length; k++) {
          _sum += array[_cca[k]];
          _cache.push(array[_cca[k]]);
        }
        if (Math.abs(_sum - sum) <= _tolerance) {
          r.push(_cache);
        }
      }

    }

  }

  var r = []
  var _array = []
  var _targetCount = 0
  var _tolerance = 0
  var _returnMark = 0

  //check data
  _targetCount = targetCount || _targetCount;
  _tolerance = tolerance || _tolerance;
  
  // 得到比目标和小的数的数组
  _array = logic.init(array, sum);
  
  // 如果给定了要求几个数
  if (_targetCount) {
    // 这个赋值为数目 - 1
    _returnMark = _targetCount - 1;
  }
  
  // 传参，比目标和小的数组，目标和，数组的索引，要求的数目，空数组result
  logic.core(_array, sum, util.getArrayIndex(_array), (_targetCount || _array.length), r);

  return r;
}

console.log(getCombBySum([1,2,3,4,5,6,7], 7, 0, 2))