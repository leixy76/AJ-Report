
package com.anjiplus.template.gaea.business.modules.datasettransform.dao.entity;

import com.anji.plus.gaea.curd.entity.GaeaBaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
* @description 数据集数据转换 entity
* @author Raod
* @date 2021-03-18 12:13:15.591309400
**/
@TableName(keepGlobalPrefix=true, value="gaea_report_data_set_transform")
@Data
public class DataSetTransform extends GaeaBaseEntity {
    /**数据集编码*/
    private String setCode;

    /**数据转换类型，DIC_NAME=TRANSFORM_TYPE; js，javaBean，字典转换*/
    private String transformType;

    /**数据转换script,处理逻辑*/
    private String transformScript;

    /**排序,执行数据转换顺序*/
    private Integer orderNum;

    /**0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG*/
    private Integer enableFlag;

    /**0--未删除 1--已删除 DIC_NAME=DELETE_FLAG*/
    private Integer deleteFlag;


}
